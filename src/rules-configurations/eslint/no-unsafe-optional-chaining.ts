import Configuration from './no-unsafe-optional-chaining.d'

const configuration:Configuration = {
	ruleId: `no-unsafe-optional-chaining`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		disallowArithmeticOperators: true,
	} ],
}

export default configuration
