import Configuration from './default-case.d'

const configuration:Configuration = {
	ruleId: `default-case`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		// TODO: make this configurable
		// commentPattern: `^no default$`,
	} ],
}

export default configuration
