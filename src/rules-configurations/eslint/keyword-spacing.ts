import Configuration from './keyword-spacing.d'

const configuration:Configuration = {
	ruleId: `keyword-spacing`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [{
		before: true,
		after: true,
	}],
}

export default configuration
