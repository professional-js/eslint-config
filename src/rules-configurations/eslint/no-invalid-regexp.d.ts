import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowConstructorFlags?: Array<string>
}>

type Configuration = RuleConfiguration<'no-invalid-regexp', 'eslint', Options>

export default Configuration
