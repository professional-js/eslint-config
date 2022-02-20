import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	commentPattern?: string
}>

type Configuration = RuleConfiguration<'no-fallthrough', 'eslint', Options>

export default Configuration
