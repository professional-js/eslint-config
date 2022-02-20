import Configuration from './array-type.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/array-type`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		default: `generic`,
		readonly: `generic`,
	} ],
}

export default configuration
