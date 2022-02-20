import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	getWithoutSet?: boolean
	setWithoutGet?: boolean
	enforceForClassMembers?: boolean
}>

type Configuration = RuleConfiguration<'accessor-pairs', 'eslint', Options>

export default Configuration
