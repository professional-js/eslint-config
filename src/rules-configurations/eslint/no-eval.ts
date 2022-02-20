import Configuration from './no-eval.d'

const configuration:Configuration = {
	ruleId: `no-eval`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [],
	optionsDangerzone: [ {
		allowIndirect: true,
	} ],
}

export default configuration
