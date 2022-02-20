import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	capIsConstructor?: boolean
}>

type Configuration = RuleConfiguration<'no-invalid-this', 'eslint', Options>

export default Configuration
