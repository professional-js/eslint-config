import Configuration from './no-unneeded-ternary.d'

const configuration:Configuration = {
	ruleId: `no-unneeded-ternary`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		defaultAssignment: false,
	} ],
}

export default configuration
