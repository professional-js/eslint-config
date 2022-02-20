import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	ignoreConditionalTests?: boolean
	ignoreMixedLogicalExpressions?: boolean
	forceSuggestionFixer?: boolean
}>

type Configuration = RuleConfiguration<'@typescript-eslint/prefer-nullish-coalescing', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
