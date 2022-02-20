import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<("always" | "never") | {
	exceptRange?: boolean
	onlyEquality?: boolean
}>

type Configuration = RuleConfiguration<'yoda', 'eslint', Options>

export default Configuration
