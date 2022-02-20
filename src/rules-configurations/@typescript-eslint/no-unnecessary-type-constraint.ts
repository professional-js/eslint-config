import Configuration from './no-unnecessary-type-constraint.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-unnecessary-type-constraint`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [],
}

export default configuration
