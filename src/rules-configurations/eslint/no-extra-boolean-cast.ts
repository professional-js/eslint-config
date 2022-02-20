import Configuration from './no-extra-boolean-cast.d'

const configuration:Configuration = {
	ruleId: `no-extra-boolean-cast`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		enforceForLogicalOperands: true,
	} ],
}

export default configuration
