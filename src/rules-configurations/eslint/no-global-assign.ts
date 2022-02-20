import Configuration from './no-global-assign.d'

const configuration:Configuration = {
	ruleId: `no-global-assign`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [{
		// TODO: make this configurable
		exceptions: [],
	} ],
}

export default configuration
