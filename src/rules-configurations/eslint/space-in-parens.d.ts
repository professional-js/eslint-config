import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<("always" | "never") | {
	exceptions?: Array<"{}" | "[]" | "()" | "empty">
}>

type Configuration = RuleConfiguration<'space-in-parens', 'eslint', Options>

export default Configuration
