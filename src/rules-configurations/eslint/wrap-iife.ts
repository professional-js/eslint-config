import Configuration from './wrap-iife.d'

const configuration:Configuration = {
	ruleId: `wrap-iife`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ `inside`, { functionPrototypeMethods: true } ],
}

export default configuration
