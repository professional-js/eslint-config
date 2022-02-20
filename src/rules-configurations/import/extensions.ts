import Configuration from './extensions.d'

const configuration:Configuration = {
	ruleId: `import/extensions`,
	providerId: `eslint-plugin-import`,
	priority: `TASTE`,
	activate: true,
	// TODO: make these configurable
	options: [
		`always`,
		{
			ts: `never`,
			tsx: `never`,
		},
	],
}

export default configuration
