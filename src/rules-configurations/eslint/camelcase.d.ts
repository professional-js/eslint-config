import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	ignoreDestructuring?: boolean
	ignoreImports?: boolean
	ignoreGlobals?: boolean
	properties?: "always" | "never"
	allow?: Array<string>
}>

type Configuration = RuleConfiguration<'camelcase', 'eslint', Options>

export default Configuration
