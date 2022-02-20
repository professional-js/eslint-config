import Configuration from './no-explicit-any.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-explicit-any`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		fixToUnknown: true,
		ignoreRestArgs: false,
	} ],
}

export default configuration
