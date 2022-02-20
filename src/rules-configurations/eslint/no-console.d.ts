import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allow?: Array<string>
}>

type Configuration = RuleConfiguration<'no-console', 'eslint', Options>

export default Configuration
