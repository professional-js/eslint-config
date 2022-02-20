import Configuration from './no-cond-assign.d'

const configuration:Configuration = {
	ruleId: `no-cond-assign`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ `always` ],
}

export default configuration
