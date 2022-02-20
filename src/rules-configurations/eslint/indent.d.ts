import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<(("tab") | number) | {
	SwitchCase?: number
	VariableDeclarator?: (number | ("first" | "off")) | {
		"var"?: number | ("first" | "off")
		"let"?: number | ("first" | "off")
		"const"?: number | ("first" | "off")
	}
	outerIIFEBody?: number | ("off")
	MemberExpression?: number | ("off")
	FunctionDeclaration?: {
		parameters?: number | ("first" | "off")
		body?: number
	}
	FunctionExpression?: {
		parameters?: number | ("first" | "off")
		body?: number
	}
	StaticBlock?: {
		body?: number
	}
	CallExpression?: {
		arguments?: number | ("first" | "off")
	}
	ArrayExpression?: number | ("first" | "off")
	ObjectExpression?: number | ("first" | "off")
	ImportDeclaration?: number | ("first" | "off")
	flatTernaryExpressions?: boolean
	offsetTernaryExpressions?: boolean
	ignoredNodes?: Array<string>
	ignoreComments?: boolean
}>

type Configuration = RuleConfiguration<'indent', 'eslint', Options>

export default Configuration
