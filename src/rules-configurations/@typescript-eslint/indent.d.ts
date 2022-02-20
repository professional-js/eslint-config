import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/indent.d'

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

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/indent', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
