import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	builtinGlobals?: boolean
	hoist?: "all" | "functions" | "never"
	allow?: Array<string>
}>

type Configuration = RuleConfiguration<'no-shadow', 'eslint', Options>

export default Configuration
