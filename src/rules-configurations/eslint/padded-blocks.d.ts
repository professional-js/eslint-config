import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<(("always" | "never") | {
	blocks?: "always" | "never"
	switches?: "always" | "never"
	classes?: "always" | "never"
}) | {
	allowSingleLineBlocks?: boolean
}>

type Configuration = RuleConfiguration<'padded-blocks', 'eslint', Options>

export default Configuration
