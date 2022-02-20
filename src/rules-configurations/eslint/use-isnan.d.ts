import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	enforceForSwitchCase?: boolean
	enforceForIndexOf?: boolean
}>

type Configuration = RuleConfiguration<'use-isnan', 'eslint', Options>

export default Configuration
