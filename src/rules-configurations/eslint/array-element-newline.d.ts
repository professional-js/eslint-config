import { RuleConfiguration } from '../../../support/Rule.d'

export type BasicConfig = ("always" | "never" | "consistent") | {
	multiline?: boolean
	minItems?: number | null
}

export type Options = Array<BasicConfig | {
	ArrayExpression?: BasicConfig
	ArrayPattern?: BasicConfig
}>

type Configuration = RuleConfiguration<'array-element-newline', 'eslint', Options>

export default Configuration
