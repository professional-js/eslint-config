import Configuration from './semi-style.d'

const configuration:Configuration = {
	ruleId: `semi-style`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [
		`first`,
	],
}

export default configuration
