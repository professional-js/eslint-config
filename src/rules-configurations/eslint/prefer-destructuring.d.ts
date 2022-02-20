import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<({
	VariableDeclarator?: {
		array?: boolean
		"object"?: boolean
	}
	AssignmentExpression?: {
		array?: boolean
		"object"?: boolean
	}
} | {
	array?: boolean
	"object"?: boolean
}) | {
	enforceForRenamedProperties?: boolean
}>

type Configuration = RuleConfiguration<'prefer-destructuring', 'eslint', Options>

export default Configuration
