import Configuration from './no-unsafe-call.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-unsafe-call`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [],
}

export default configuration
