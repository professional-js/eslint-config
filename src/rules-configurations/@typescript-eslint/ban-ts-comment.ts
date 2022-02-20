import Configuration from './ban-ts-comment.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/ban-ts-comment`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		'ts-expect-error': true,
		'ts-ignore': true,
		'ts-nocheck': true,
		'ts-check': false,

		minimumDescriptionLength: 8, // At least “TODO: #0”
	} ],
}

export default configuration
