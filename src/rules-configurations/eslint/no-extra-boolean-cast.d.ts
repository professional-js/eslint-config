import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	enforceForLogicalOperands?: boolean
}>

type Configuration = RuleConfiguration<'no-extra-boolean-cast', 'eslint', Options>

export default Configuration
