import Configuration from './no-floating-promises.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-floating-promises`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		ignoreVoid: false,
		ignoreIIFE: false,
	} ],
	optionsDangerzone: [ {
		ignoreVoid: true,
		ignoreIIFE: false,
	} ],
}

export default configuration
