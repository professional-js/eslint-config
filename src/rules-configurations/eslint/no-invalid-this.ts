import Configuration from './no-invalid-this.d'

const configuration:Configuration = {
	ruleId: `no-invalid-this`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		capIsConstructor: true,
	} ],
}

export default configuration
