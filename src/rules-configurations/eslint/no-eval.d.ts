import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowIndirect?: boolean
}>

type Configuration = RuleConfiguration<'no-eval', 'eslint', Options>

export default Configuration
