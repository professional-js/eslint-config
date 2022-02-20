import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	commentPattern?: string
}>

type Configuration = RuleConfiguration<'default-case', 'eslint', Options>

export default Configuration
