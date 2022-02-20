import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	requireStringLiterals?: boolean
}>

type Configuration = RuleConfiguration<'valid-typeof', 'eslint', Options>

export default Configuration
