import Configuration from './curly.d'

const configuration:Configuration = {
	ruleId: `curly`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [
		`all`,
	],
	optionsDangerzone: [
		`multi-line`,
		`consistent`,
	],
}

export default configuration
