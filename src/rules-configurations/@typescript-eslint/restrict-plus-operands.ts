import Configuration from './restrict-plus-operands.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/restrict-plus-operands`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		checkCompoundAssignments: true,
		allowAny: false,
	} ],
}

export default configuration
