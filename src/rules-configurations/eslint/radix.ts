import Configuration from './radix.d'

const configuration:Configuration = {
	ruleId: `radix`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ `as-needed` ],
}

export default configuration
