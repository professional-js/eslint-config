import { RuleConfiguration } from '../../../support/Rule.d'

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

type Configuration = RuleConfiguration<'no-extra-parens', 'eslint', Options>

export default Configuration
