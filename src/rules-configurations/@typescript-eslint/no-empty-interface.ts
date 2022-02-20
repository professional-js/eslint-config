import Configuration from './no-empty-interface.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-empty-interface`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `HELPFUL`,
	activate: true,
	options: [],
}

export default configuration
