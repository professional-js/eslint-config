import Configuration from './no-multiple-empty-lines.d'

const configuration:Configuration = {
	ruleId: `no-multiple-empty-lines`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [ {
		max: 2,
		maxBOF: 0,
		maxEOF: 0,
	} ],
}

export default configuration
