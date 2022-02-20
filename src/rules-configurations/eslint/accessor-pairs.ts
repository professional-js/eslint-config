import Configuration from './accessor-pairs.d'

const configuration:Configuration = {
	ruleId: `accessor-pairs`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		getWithoutSet: true,
		setWithoutGet: true,
		enforceForClassMembers: true,
	} ],
}

export default configuration
