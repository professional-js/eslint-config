import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<("always" | "never") | {
	keywords?: "always" | "never" | "off"
	functions?: "always" | "never" | "off"
	classes?: "always" | "never" | "off"
}>

type Configuration = RuleConfiguration<'space-before-blocks', 'eslint', Options>

export default Configuration
