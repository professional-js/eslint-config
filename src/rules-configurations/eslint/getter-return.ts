import Configuration from './getter-return.d'

const configuration:Configuration = {
	ruleId: `getter-return`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		allowImplicit: true,
	} ],
}

export default configuration
