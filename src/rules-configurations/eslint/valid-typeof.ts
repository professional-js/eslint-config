import Configuration from './valid-typeof.d'

const configuration:Configuration = {
	ruleId: `valid-typeof`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		requireStringLiterals: true,
	} ],
}

export default configuration
