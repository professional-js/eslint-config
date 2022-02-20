import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/no-extra-parens.d'

export type Options = Array<"functions"> | Array<("all") | {
	conditionalAssign?: boolean
	nestedBinaryExpressions?: boolean
	returnAssign?: boolean
	ignoreJSX?: "none" | "all" | "single-line" | "multi-line"
	enforceForArrowConditionals?: boolean
	enforceForSequenceExpressions?: boolean
	enforceForNewInMemberExpressions?: boolean
	enforceForFunctionPrototypeMethods?: boolean
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-extra-parens', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
