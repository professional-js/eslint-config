import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	int32Hint?: boolean
}>

type Configuration = RuleConfiguration<'space-infix-ops', 'eslint', Options>

export default Configuration
