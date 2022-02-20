import Configuration from './no-empty-function.d'

const configuration:Configuration = {
	ruleId: `no-empty-function`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ { allow: [] } ],
}

export default configuration
