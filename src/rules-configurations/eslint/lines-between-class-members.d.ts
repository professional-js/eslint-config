import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<("always" | "never") | {
	exceptAfterSingleLine?: boolean
}>

type Configuration = RuleConfiguration<'lines-between-class-members', 'eslint', Options>

export default Configuration
