import { Linter } from 'eslint'

import { canRequire } from '../support/canRequire'
import { RuleConfiguration, RuleConfigurationActive, RuleConfigurationBase, RuleConfigurationIgnored, RuleConfigurationInactive, RuleConfigurationOptions, RuleConfigurationOverride, RuleConfigurationSet } from '../support/Rule.d'

import { providers } from './.providers'
import { Priority } from './priorities'
import rulesConfigurations from './rules-configurations'
import typescript_noDuplicateImports from './rules-configurations/@typescript-eslint/no-duplicate-imports'
import typescript_noMeaninglessVoidOperator from './rules-configurations/@typescript-eslint/no-meaningless-void-operator'
import typescript_noUnusedVars from './rules-configurations/@typescript-eslint/no-unused-vars'
import eslint_noDuplicateImports from './rules-configurations/eslint/no-duplicate-imports'
import eslint_noVoid from './rules-configurations/eslint/no-void'
import import_noDuplicates from './rules-configurations/import/no-duplicates'
import import_order from './rules-configurations/import/order'
import simpleImportSort_imports from './rules-configurations/simple-import-sort/imports'
import unusedImports_noUnusedVars from './rules-configurations/unused-imports/no-unused-vars'


type ProvidersMap = typeof providers
type ProviderId = keyof ProvidersMap
type ProviderKey = Exclude<ProvidersMap[ProviderId], false>

const [
	availableProvidersIds,
	availableProvidersKeys,
] = Object.entries(providers).reduce(
	([ids, keys], [id, key]) => (
		key === false
		? [ids, keys]
		: [
			[...ids, id],
			[...keys, key],
		]
	),
	[[], []] as [Array<ProviderId>, Array<ProviderKey>],
)


type Configurations = typeof rulesConfigurations
type Configuration = Configurations[number]

type RuleId = (
	Configuration extends RuleConfigurationBase<infer I>
	? I
	: never
)

type Dangerzone = Array<RuleId> | boolean

type Options = {
	dangerzone?:Dangerzone
	priorities:Array<Priority>
	overrides?:Linter.Config
}

//

export default makeEslintrc

function makeEslintrc (configuration:Options) : Linter.Config
function makeEslintrc (...priorities:Array<Priority>) : Linter.Config

function makeEslintrc (configuration:(Options | Priority), ...morePriorities:Array<Priority>) : Linter.Config {
	if (typeof configuration === `string`) {
		return makeEslintrc({
			priorities: [
				configuration,
				...morePriorities,
			],
		})
	}

	if (!availableProvidersIds.includes(`eslint`)) {
		throw new Error(`eslint not found, please make sure to install eslint and all desired plugins`)
	}

	const {
		priorities,
		dangerzone,
		overrides,
	} = configuration

	const availableConfigurations = rulesConfigurations.filter(
		(config) : config is Configuration & { providerId: ProviderId } => availableProvidersIds.includes(config.providerId),
	)

	// TODO: make this available as an advanced config setting and react to activation instead of availability
	if (availableConfigurations.includes(simpleImportSort_imports)) {
		deactivateRule(availableConfigurations, import_order)
	}

	// TODO: make this available as an advanced config setting and react to activation instead of availability
	if (availableConfigurations.includes(unusedImports_noUnusedVars)) {
		deactivateRule(availableConfigurations, typescript_noUnusedVars)
	}

	// TODO: make this available as an advanced config setting and react to activation instead of availability
	if (availableConfigurations.includes(typescript_noMeaninglessVoidOperator)) {
		deactivateRule(availableConfigurations, eslint_noVoid)
	}

	// TODO: ensure only available configs will be added to this
	const extend = ensureArray(overrides?.extends)
	const parserOptions = ensureRecord(overrides?.parserOptions)

	let parser : Linter.Config[`parser`] = overrides?.parser

	const parserTs = `@typescript-eslint/parser`
	const parserVue = `vue-eslint-parser`

	if (parser === undefined && canRequire(parserTs)) {
		parser = parserTs
	}

	const settings : Linter.Config[`settings`] = ensureRecord(overrides?.settings)

	if ( availableProvidersKeys.includes(`react`) ) {
		const reactSettings = ensureRecord(settings[`react`])

		reactSettings[`version`] ??= `detect`
		settings[`react`] = reactSettings
	}

	if (
		availableProvidersKeys.includes(`vue`)
		&& parser !== parserVue
		&& parserOptions[`parser`] === undefined
	) {
		parserOptions[`parser`] = parser
		parser = parserVue

		parserOptions[`extraFileExtensions`] = [
			`.vue`,
		]
	}

	if (availableProvidersKeys.includes(`import`)) {
		if (parserOptions.sourceType === `script`) {
			throw new Error(outdent`
				Cannot use \`eslint-plugin-import\` with source type script.
				See https://github.com/import-js/eslint-plugin-import/blob/68cea3e6b6fe5fd61e5cf2e2c7c0be9e8dc597cb/config/recommended.js#L22
			`)
		}

		parserOptions.sourceType = `module`

		const minEcmaVersion = 2018

		if (
			parserOptions.ecmaVersion !== undefined
			&& parserOptions.ecmaVersion !== `latest`
			&& parserOptions.ecmaVersion < minEcmaVersion
		) {
			throw new Error(outdent`
				Cannot use \`eslint-plugin-import\` with ecma version less than 2018
				See https://github.com/import-js/eslint-plugin-import/blob/68cea3e6b6fe5fd61e5cf2e2c7c0be9e8dc597cb/config/recommended.js#L22
			`)
		}

		parserOptions.ecmaVersion = parserOptions.ecmaVersion ?? minEcmaVersion

		// TODO: make this available as an advanced config setting and react to activation instead of availability
		if (availableConfigurations.includes(import_noDuplicates)) {
			deactivateRule(availableConfigurations, eslint_noDuplicateImports)
			deactivateRule(availableConfigurations, typescript_noDuplicateImports)
		}

		if (availableProvidersKeys.includes(`@typescript-eslint`)) {
			// TODO: ensure only available configs will be added to this
			extend.push(`plugin:import/typescript`)
		}
	}

	if (availableProvidersKeys.includes(`react`)) {
		parserOptions.ecmaFeatures = {
			...parserOptions.ecmaFeatures,
			jsx: parserOptions.ecmaFeatures?.jsx ?? true,
		}
	}

	const env : Linter.Config[`env`] = overrides?.env ?? {}

	if (
		env[`browser`] === undefined
		&& (
			availableProvidersKeys.includes(`react`)
			|| availableProvidersKeys.includes(`react-hooks`)
			|| availableProvidersKeys.includes(`vue`)
		)
	) {
		env[`browser`] = true
	}

	if (
		env[`node`] === undefined
		&& availableProvidersKeys.includes(`node`)
	) {
		env[`node`] = true
	}

	const overrideConfigurations:Array<RuleConfigurationOverride> = availableConfigurations.filter(
		(c) : c is RuleConfigurationOverride & Configuration => (
			Boolean((c as RuleConfigurationOverride).base)
		),
	)

	const overriddenConfigurations = overrideConfigurations.map((o) => o.base)

	const usableConfigurations = (
		availableConfigurations
		.filter((
			config,
		) => (
			!overriddenConfigurations.includes(config as RuleConfiguration)),
		)
	)

	const squashedConfigurations = (
		usableConfigurations
		.map(<
			R extends (typeof availableConfigurations)[number]['ruleId'],
			P extends (typeof availableConfigurations)[number]['providerId'],
		>(
			config:(
				| RuleConfiguration<R, P>
				| RuleConfigurationOverride<RuleConfiguration, R, P>
			),
		) : RuleConfiguration<R, P> => {
			if (!isOverride(config)) return config

			const {
				base,

				ruleId,
				providerId,
				ignore,
				activate,
			} = config

			const priority = config.priority ?? (base as RuleConfigurationSet).priority
			const options = config.options ?? (base as RuleConfigurationOptions).options
			const optionsDangerzone = config.optionsDangerzone ?? (base as RuleConfigurationOptions).optionsDangerzone

			if (ignore === true) {
				return {
					ruleId,
					providerId,
					ignore,
				}
			}

			if (activate === false) {
				return {
					ruleId,
					providerId,
					priority,
					activate,
				}
			}

			if (activate === true) {
				return {
					ruleId,
					providerId,
					priority,
					activate,
					options,
					optionsDangerzone,
				}
			}

			if (base.ignore === true) {
				return {
					ruleId,
					providerId,
					ignore: base.ignore,
				}
			}

			if (!base.activate) {
				return {
					ruleId,
					providerId,
					priority,
					activate: base.activate,
				}
			}

			return {
				ruleId,
				providerId,
				priority,
				activate: base.activate,
				options,
				optionsDangerzone,
			}
		})
	)

	const setConfigurations = (
		squashedConfigurations
		.filter(<
			R extends (typeof availableConfigurations)[number]['ruleId'],
			P extends (typeof availableConfigurations)[number]['providerId'],
		>(
			config:RuleConfiguration<R, P>,
		) : config is Exclude<
			RuleConfiguration<R, P>,
			RuleConfigurationIgnored
		> => !(config as RuleConfigurationIgnored | RuleConfigurationSet).ignore)
		.filter((config) => priorities.includes(config.priority))
	)

	const enum Level {
		error = `error`,
		warning = `warn`,
		off = `off`,
	}

	const ruleSettings = (
		setConfigurations
		.map(
			(config) => ({
				provider: providers[config.providerId] as ProviderKey, // this assertion is ensured by `availableConfigurations`
				rule: config.ruleId,
				setting: (
					config.activate
					? [
						config.priority === `TASTE` ? Level.warning : Level.error,
						...(
							Array.isArray(config.optionsDangerzone) && (
								dangerzone === true
								|| (Array.isArray(dangerzone) ? dangerzone : []).includes(config.ruleId)
							)
							? config.optionsDangerzone
							: config.options
						),
					] as [
						Level,
						...Array<(Extract<Configuration, RuleConfigurationActive>)['options'][number]>,
					]
					: Level.off
				),
			}),
		)
	)

	const plugins = new Set<ProviderKey>()
	const rules : Partial<Linter.RulesRecord> = {}

	ruleSettings.forEach(({ provider, rule, setting }) => {
		if (provider !== `eslint`) plugins.add(provider)

		rules[rule] = setting
	})

	if (availableProvidersKeys.includes(`vue`)) plugins.add(`vue`)

	return {
		...overrides,

		extends: extend,
		parser,
		parserOptions,
		settings,
		plugins: ([
			...plugins,
			...(overrides?.plugins ?? []),
		]),
		rules: {
			...rules,
			...overrides?.rules,
		},
	}
}


//


function isOverride (config:RuleConfiguration | RuleConfigurationOverride) : config is RuleConfigurationOverride {
	return Boolean((config as RuleConfigurationOverride).base)
}

function ensureArray<T> (data?:(Array<T> | T)) : Array<T> {
	if (data === undefined) return []
	if (Array.isArray(data)) return [...data]

	return [data]
}

function ensureRecord<T extends Record<string, unknown> = Record<string, unknown>> (data?:T) : unknown extends T ? Record<string, unknown> : Partial<T> {
	if (data === undefined) return {}

	return {...data}
}


//


function deactivateRule (array:Array<RuleConfiguration | RuleConfigurationOverride>, item: Configuration) : void {
	if (!array.includes(item)) return

	const singleItem = 1

	array.splice(
		array.indexOf(item),
		singleItem,
		deactivated(item),
	)
}

function deactivated<
	R extends string = string,
	P extends string = string,
	O extends Array<unknown> = Array<unknown>,
> (
	configuration:RuleConfiguration<R, P, O> | RuleConfigurationOverride<RuleConfiguration, R, P, O>,
) : (
	| RuleConfigurationIgnored<R, P>
	| RuleConfigurationInactive<R, P>
	| RuleConfigurationOverride<RuleConfiguration, R, P, O>
) {
	if (isIgnored(configuration)) {
		return configuration
	}

	return {
		...Object.fromEntries(
			Object.entries(configuration)
			.filter(([key]) => !key.startsWith(`options`)),
		),

		activate: false as const,

		// need to assert because the chain entries→filter→fromEntries is unable to preserve the exact type association between key and value
	} as RuleConfigurationInactive<R, P>
}

function isIgnored (configuration:RuleConfiguration | RuleConfigurationOverride) : configuration is RuleConfigurationIgnored {
	return configuration.ignore ?? false
}

//

function outdent (strings:TemplateStringsArray, ...interpolations:Array<string>) {
	return (
		strings
		.flatMap((string, index) => [string, interpolations[index]])
		.slice(0, -1) // eslint-disable-line @typescript-eslint/no-magic-numbers
		.join(``)
		.trim()
		.replace(/^\t+/gm, ``)
	)
}
