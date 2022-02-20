import Configuration from './restrict-template-expressions.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/restrict-template-expressions`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		allowNumber: true,
		allowBoolean: false,
		allowAny: false,
		allowNullish: false,
		allowRegExp: false,
	} ],
}

export default configuration
