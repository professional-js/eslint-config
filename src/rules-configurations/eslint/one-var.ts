import Configuration from './one-var.d'

const configuration:Configuration = {
	ruleId: `one-var`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ `never` ],
}

export default configuration
