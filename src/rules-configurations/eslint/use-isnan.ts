import Configuration from './use-isnan.d'

const configuration:Configuration = {
	ruleId: `use-isnan`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		enforceForSwitchCase: true,
		enforceForIndexOf: true,
	} ],
}

export default configuration
