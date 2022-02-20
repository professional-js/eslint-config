import Configuration from './switch-colon-spacing.d'

const configuration:Configuration = {
	ruleId: `switch-colon-spacing`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [ {
		before: false,
		after: true,
	} ],
}

export default configuration
