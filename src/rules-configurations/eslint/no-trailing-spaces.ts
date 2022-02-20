import Configuration from './no-trailing-spaces.d'

const configuration:Configuration = {
	ruleId: `no-trailing-spaces`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [ {
		skipBlankLines: false,
		ignoreComments: false,
	} ],
}

export default configuration
