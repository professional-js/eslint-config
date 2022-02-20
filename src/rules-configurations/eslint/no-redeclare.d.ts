import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	builtinGlobals?: boolean
}>

type Configuration = RuleConfiguration<'no-redeclare', 'eslint', Options>

export default Configuration
