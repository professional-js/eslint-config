import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	lib?: "always" | "never"
	path?: "always" | "never"
	types?: "always" | "never" | "prefer-import"
}>

type Configuration = RuleConfiguration<'@typescript-eslint/triple-slash-reference', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
