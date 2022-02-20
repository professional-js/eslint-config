import Configuration from './no-extraneous-dependencies.d'

const configuration:Configuration = {
	ruleId: `import/no-extraneous-dependencies`,
	providerId: `eslint-plugin-import`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		bundledDependencies: true,
		devDependencies: [ `!**/src/**` ],
		optionalDependencies: false,
		peerDependencies: [ `**/src/**` ],
	} ],
}

export default configuration
