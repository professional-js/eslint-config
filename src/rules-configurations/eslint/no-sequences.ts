import Configuration from './no-sequences.d'

const configuration:Configuration = {
	ruleId: `no-sequences`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		allowInParentheses: true,
	} ],
}

export default configuration
