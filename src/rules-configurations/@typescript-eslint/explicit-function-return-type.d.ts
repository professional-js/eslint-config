import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowExpressions?: boolean
	allowTypedFunctionExpressions?: boolean
	allowHigherOrderFunctions?: boolean
	allowDirectConstAssertionInArrowFunctions?: boolean
	allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean
	allowedNames?: Array<string>
}>

type Configuration = RuleConfiguration<'@typescript-eslint/explicit-function-return-type', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
