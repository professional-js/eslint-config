import Configuration from './no-meaningless-void-operator.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-meaningless-void-operator`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		checkNever: true,
	} ],
}

export default configuration
