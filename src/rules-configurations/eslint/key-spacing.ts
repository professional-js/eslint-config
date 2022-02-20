import Configuration from './key-spacing.d'

const configuration:Configuration = {
	ruleId: `key-spacing`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [ {
		beforeColon: false,
		afterColon: true,
		mode: `strict`,
		// align: false,
	} ],
}

export default configuration
