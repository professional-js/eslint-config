import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	checkLoops?: boolean
}>

type Configuration = RuleConfiguration<'no-constant-condition', 'eslint', Options>

export default Configuration
