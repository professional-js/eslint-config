import Configuration from './space-unary-ops.d'

const configuration:Configuration = {
	ruleId: `space-unary-ops`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [ {
		words: true,
		nonwords: false,
		overrides: {},
	} ],
}

export default configuration
