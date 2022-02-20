import Configuration from './comma-style.d'

const configuration:Configuration = {
	ruleId: `comma-style`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [
		`last`,
		{ exceptions: {
			VariableDeclaration: true,
		} },
	],
}

export default configuration
