import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	ignore?: Array<"WhileStatement" | "DoWhileStatement" | "ForStatement" | "ForInStatement" | "ForOfStatement">
}>

type Configuration = RuleConfiguration<'no-unreachable-loop', 'eslint', Options>

export default Configuration
