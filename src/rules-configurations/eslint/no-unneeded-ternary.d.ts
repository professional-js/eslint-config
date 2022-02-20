import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	defaultAssignment?: boolean
}>

type Configuration = RuleConfiguration<'no-unneeded-ternary', 'eslint', Options>

export default Configuration
