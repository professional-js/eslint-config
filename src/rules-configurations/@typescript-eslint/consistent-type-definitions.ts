import Configuration from './consistent-type-definitions.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/consistent-type-definitions`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `HELPFUL`,
	activate: true,
	options: [ `type` ],
}

export default configuration
