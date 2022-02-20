import Configuration from './no-unsafe-member-access.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-unsafe-member-access`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [],
}

export default configuration
