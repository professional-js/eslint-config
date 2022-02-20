import Configuration from './no-new-require.d'

const configuration:Configuration = {
	ruleId: `node/no-new-require`,
	providerId: `eslint-plugin-node`,
	priority: `IMPORTANT`,
	activate: true,
	options: [],
}

export default configuration
