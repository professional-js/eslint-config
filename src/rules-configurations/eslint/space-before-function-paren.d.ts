import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<("always" | "never") | {
	anonymous?: "always" | "never" | "ignore"
	named?: "always" | "never" | "ignore"
	asyncArrow?: "always" | "never" | "ignore"
}>

type Configuration = RuleConfiguration<'space-before-function-paren', 'eslint', Options>

export default Configuration
