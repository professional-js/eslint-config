import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowParens?: boolean
}>

type Configuration = RuleConfiguration<'no-confusing-arrow', 'eslint', Options>

export default Configuration
