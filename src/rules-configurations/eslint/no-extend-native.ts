import Configuration from './no-extend-native.d'

const configuration:Configuration = {
	ruleId: `no-extend-native`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		// TODO: make this configurable
		exceptions: [],
	} ],
}

export default configuration
