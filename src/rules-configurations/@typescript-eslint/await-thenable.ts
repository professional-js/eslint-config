import Configuration from './await-thenable.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/await-thenable`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [],
}

export default configuration
