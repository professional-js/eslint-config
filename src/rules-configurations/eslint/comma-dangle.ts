import Configuration from './comma-dangle.d'

const configuration:Configuration = {
	ruleId: `comma-dangle`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [ `always-multiline` ],
}

export default configuration
