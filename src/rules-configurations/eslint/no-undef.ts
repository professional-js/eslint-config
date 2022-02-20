import Configuration from './no-undef.d'

const configuration:Configuration = {
	ruleId: `no-undef`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		typeof: true,
	} ],
}

export default configuration
