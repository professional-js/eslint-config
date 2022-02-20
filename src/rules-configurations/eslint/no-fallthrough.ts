import Configuration from './no-fallthrough.d'

const configuration:Configuration = {
	ruleId: `no-fallthrough`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		// TODO: make this configurable
		// commentPattern: `falls?\\s?through`,
	} ],
}

export default configuration
