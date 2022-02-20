import Configuration from './no-unsafe-argument.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-unsafe-argument`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [],
}

export default configuration
