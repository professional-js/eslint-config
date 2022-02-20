import Configuration from './namespace.d'

const configuration:Configuration = {
	ruleId: `import/namespace`,
	providerId: `eslint-plugin-import`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		allowComputed: false,
	} ],
}

export default configuration
