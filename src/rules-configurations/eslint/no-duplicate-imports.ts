import Configuration from './no-duplicate-imports.d'

const configuration:Configuration = {
	ruleId: `no-duplicate-imports`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		includeExports: true,
	} ],
}

export default configuration
