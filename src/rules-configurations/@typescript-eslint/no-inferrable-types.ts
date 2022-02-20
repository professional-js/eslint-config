import Configuration from './no-inferrable-types.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-inferrable-types`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		ignoreParameters: false,
		ignoreProperties: false,
	} ],
}

export default configuration
