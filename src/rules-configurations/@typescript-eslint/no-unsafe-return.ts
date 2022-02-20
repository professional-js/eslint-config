import Configuration from './no-unsafe-return.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-unsafe-return`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [],
}

export default configuration
