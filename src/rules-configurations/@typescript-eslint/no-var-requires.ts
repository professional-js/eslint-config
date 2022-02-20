import Configuration from './no-var-requires.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-var-requires`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [],
}

export default configuration
