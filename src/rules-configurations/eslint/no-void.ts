import Configuration from './no-void.d'

const configuration:Configuration = {
	ruleId: `no-void`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		allowAsStatement: false,
	} ],
	optionsDangerzone: [ {
		allowAsStatement: true, // for @typescript-eslint/no-floating-promises
	} ],
}

export default configuration
