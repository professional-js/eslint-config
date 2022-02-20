import Configuration from './no-duplicates.d'

const configuration:Configuration = {
	ruleId: `import/no-duplicates`,
	providerId: `eslint-plugin-import`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		considerQueryString: true,
	} ],
}

export default configuration
