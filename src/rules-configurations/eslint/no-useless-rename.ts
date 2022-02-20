import Configuration from './no-useless-rename.d'

const configuration:Configuration = {
	ruleId: `no-useless-rename`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [{
		ignoreDestructuring: false,
		ignoreExport: false,
		ignoreImport: false,
	}],
}

export default configuration
