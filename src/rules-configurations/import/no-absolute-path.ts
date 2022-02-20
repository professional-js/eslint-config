import Configuration from './no-absolute-path.d'

const configuration:Configuration = {
	ruleId: `import/no-absolute-path`,
	providerId: `eslint-plugin-import`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		esmodule: true,
		commonjs: true,
		amd: false,
	} ],
}

export default configuration
