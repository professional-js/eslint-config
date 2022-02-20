import Configuration from './no-namespace.d'

const configuration:Configuration = {
	ruleId: `import/no-namespace`,
	providerId: `eslint-plugin-import`,
	priority: `TASTE`,
	activate: true,
	options: [ {
		// TODO: make this configurable
		ignore: [],
	} ],
}

export default configuration
