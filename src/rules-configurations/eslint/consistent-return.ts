import Configuration from './consistent-return.d'

const configuration:Configuration = {
	ruleId: `consistent-return`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [{
		treatUndefinedAsUnspecified: false,
	}],
}

export default configuration
