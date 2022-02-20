import Configuration from './comma-spacing.d'

const configuration:Configuration = {
	ruleId: `comma-spacing`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [{
		before: false,
		after: true,
	}],
}

export default configuration
