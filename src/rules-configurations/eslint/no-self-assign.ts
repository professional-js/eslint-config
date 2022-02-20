import Configuration from './no-self-assign.d'

const configuration:Configuration = {
	ruleId: `no-self-assign`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		props: true,
	} ],
}

export default configuration
