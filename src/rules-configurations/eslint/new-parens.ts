import Configuration from './new-parens.d'

const configuration:Configuration = {
	ruleId: `new-parens`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ `always` ],
}

export default configuration
