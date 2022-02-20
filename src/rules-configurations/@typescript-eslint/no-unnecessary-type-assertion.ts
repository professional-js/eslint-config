import Configuration from './no-unnecessary-type-assertion.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-unnecessary-type-assertion`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [],
}

export default configuration
