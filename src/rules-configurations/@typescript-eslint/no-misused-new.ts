import Configuration from './no-misused-new.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-misused-new`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [],
}

export default configuration
