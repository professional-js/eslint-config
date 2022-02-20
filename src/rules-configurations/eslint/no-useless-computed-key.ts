import Configuration from './no-useless-computed-key.d'

const configuration:Configuration = {
	ruleId: `no-useless-computed-key`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		enforceForClassMembers: true,
	} ],
}

export default configuration
