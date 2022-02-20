import Configuration from './no-multi-spaces.d'

const configuration:Configuration = {
	ruleId: `no-multi-spaces`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [ {
		exceptions: {},
		ignoreEOLComments: false,
	} ],
}

export default configuration
