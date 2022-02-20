import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/brace-style.d'

export type Options = Array<("1tbs" | "stroustrup" | "allman") | {
	allowSingleLine?: boolean
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/brace-style', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
