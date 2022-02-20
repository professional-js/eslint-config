import Configuration from './no-confusing-arrow.d'

const configuration:Configuration = {
	ruleId: `no-confusing-arrow`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		allowParens: true,
	} ],
}

export default configuration
