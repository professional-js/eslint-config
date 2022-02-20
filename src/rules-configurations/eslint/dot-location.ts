import Configuration from './dot-location.d'

const configuration:Configuration = {
	ruleId: `dot-location`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [ `property` ],
}

export default configuration
