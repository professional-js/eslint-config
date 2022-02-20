import Configuration from './no-unsafe-assignment.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-unsafe-assignment`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [],
}

export default configuration
