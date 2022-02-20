import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	exceptions?: Array<string>
}>

type Configuration = RuleConfiguration<'no-global-assign', 'eslint', Options>

export default Configuration
