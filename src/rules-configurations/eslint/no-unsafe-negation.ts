import Configuration from './no-unsafe-negation.d'

const configuration:Configuration = {
	ruleId: `no-unsafe-negation`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		enforceForOrderingRelations: true,
	} ],
}

export default configuration
