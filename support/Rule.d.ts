import { Rule as EslintRule } from 'eslint'

import { Priority } from './priorities'
import { EslintProvider } from './providers'
import { DeepReadonly } from './utility.d'


export type RuleDefinition = DeepReadonly<{
	id: string
	key: string
	providerId: string
	meta: (
		& Omit<EslintRule.RuleMetaData, 'docs' | 'fixable'>
		& {
			docs?: (
				& Omit<Exclude<EslintRule.RuleMetaData['docs'], undefined>, 'category' | 'recommended'>
				& {
					category?: string | null // eslint-plugin-vue
					recommended?: (
						| Exclude<EslintRule.RuleMetaData['docs'], undefined>['recommended']
						| 'error'
						| 'warn'
						| 'true'
					)
					extendsBaseRule?: boolean | string
				}
			)
			fixable?: EslintRule.RuleMetaData['fixable'] | null
		}
	)
}>


export type RuleData = {
	rule: RuleDefinition
	provider: EslintProvider
	configFile: string
	typingFile: string
	definitionFile: string
	reasonFile: string
	exists: boolean
	complete: boolean
}


export type RuleBundle = {
	base: RuleData
	extend: Array<RuleData>
	all: Array<RuleData>
}


export type RuleConfigurationBase<R extends string = string, P extends string = string> = {
	ruleId: R
	providerId: P
}

export type RuleConfigurationIgnore = {
	ignore: true
}
export type RuleConfigurationSet = {
	ignore?: never
	priority: Priority
}
export type RuleConfigurationOff = {
	activate: false
}
export type RuleConfigurationOptions<O extends Array<unknown> = Array<unknown>> = {
	activate: true
	options: O
	optionsDangerzone?: O
}

export type RuleConfigurationIgnored<R extends string = string, P extends string = string> = (
	& RuleConfigurationBase<R, P>
	& RuleConfigurationIgnore
)
export type RuleConfigurationInactive<R extends string = string, P extends string = string> = (
	& RuleConfigurationBase<R, P>
	& RuleConfigurationSet
	& RuleConfigurationOff
)
export type RuleConfigurationActive<R extends string = string, P extends string = string, O extends Array<unknown> = Array<unknown>> = (
	& RuleConfigurationBase<R, P>
	& RuleConfigurationSet
	& RuleConfigurationOptions<O>
)

export type RuleConfiguration<R extends string = string, P extends string = string, O extends Array<unknown> = Array<unknown>> = (
	| RuleConfigurationIgnored<R, P>
	| RuleConfigurationInactive<R, P>
	| RuleConfigurationActive<R, P, O>
)

export type RuleConfigurationOverride<
	B extends RuleConfiguration = RuleConfiguration,
	R extends string = string,
	P extends string = string,
	O extends Array<unknown> = Array<unknown>,
> = (
	& RuleConfigurationBase<R, P>
	& {
		base: B
		ignore?: true
		priority?: Priority
		activate?: boolean
		options?: O
		optionsDangerzone?: O
	}
)
