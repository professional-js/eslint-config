import Configuration from './quotes.d'

const configuration:Configuration = {
	ruleId: `quotes`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [ `backtick` ],
}

export default configuration
