import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowKeywords?: boolean
	allowPattern?: string
}>

type Configuration = RuleConfiguration<'dot-notation', 'eslint', Options>

export default Configuration
