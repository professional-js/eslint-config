import Configuration from './no-unresolved.d'

const configuration:Configuration = {
	ruleId: `import/no-unresolved`,
	providerId: `eslint-plugin-import`,
	priority: `IMPORTANT`,
	activate: true,
	// TODO: make this configurable
	options: [ {
		esmodule: true,
		commonjs: true,
		amd: false,
		// ignore: [/* must be non-empty to be valid */],
		caseSensitive: true,
		caseSensitiveStrict: true,
	} ],
}

export default configuration
