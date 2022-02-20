import Configuration from './prefer-destructuring.d'

const configuration:Configuration = {
	ruleId: `prefer-destructuring`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [
		{
			VariableDeclarator: {
				array: true,
				object: true,
			},
			AssignmentExpression: {
				array: true,
				object: true,
			},
		}, {
			enforceForRenamedProperties: false,
		},
	],
}

export default configuration
