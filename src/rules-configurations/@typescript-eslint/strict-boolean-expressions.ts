import Configuration from './strict-boolean-expressions.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/strict-boolean-expressions`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [],
}

export default configuration
