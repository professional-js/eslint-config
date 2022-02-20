import Configuration from './prefer-arrow-callback.d'

const configuration:Configuration = {
	ruleId: `prefer-arrow-callback`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		allowNamedFunctions: false,
		allowUnboundThis: false,
	} ],
}

export default configuration
