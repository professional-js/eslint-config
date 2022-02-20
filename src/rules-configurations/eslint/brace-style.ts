import Configuration from './brace-style.d'

const configuration:Configuration = {
	ruleId: `brace-style`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [
		`1tbs`,
		{
			allowSingleLine: false,
		},
	],
}

export default configuration
