import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<("all" | "local") | {
	vars?: "all" | "local"
	varsIgnorePattern?: string
	args?: "all" | "after-used" | "none"
	ignoreRestSiblings?: boolean
	argsIgnorePattern?: string
	caughtErrors?: "all" | "none"
	caughtErrorsIgnorePattern?: string
}>

type Configuration = RuleConfiguration<'unused-imports/no-unused-vars-ts', 'eslint-plugin-unused-imports', Options>

export default Configuration
