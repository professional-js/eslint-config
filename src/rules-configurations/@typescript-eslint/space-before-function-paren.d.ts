import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/space-before-function-paren.d'

export type Options = Array<("always" | "never") | {
	anonymous?: "always" | "never" | "ignore"
	named?: "always" | "never" | "ignore"
	asyncArrow?: "always" | "never" | "ignore"
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/space-before-function-paren', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
