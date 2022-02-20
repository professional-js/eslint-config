import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowEmptyCatch?: boolean
}>

type Configuration = RuleConfiguration<'no-empty', 'eslint', Options>

export default Configuration
