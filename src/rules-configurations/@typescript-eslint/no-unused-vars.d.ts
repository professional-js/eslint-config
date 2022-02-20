import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/no-unused-vars.d'

export type Options = Array<("all" | "local") | {
	vars?: "all" | "local"
	varsIgnorePattern?: string
	args?: "all" | "after-used" | "none"
	ignoreRestSiblings?: boolean
	argsIgnorePattern?: string
	caughtErrors?: "all" | "none"
	caughtErrorsIgnorePattern?: string
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-unused-vars', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
