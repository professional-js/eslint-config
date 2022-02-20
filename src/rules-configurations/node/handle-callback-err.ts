import Configuration from './handle-callback-err.d'

const configuration:Configuration = {
	ruleId: `node/handle-callback-err`,
	providerId: `eslint-plugin-node`,
	priority: `HELPFUL`,
	activate: true,
	options: [
		// TODO: make this configurable
		`^(err|error|.+Error)$`,
	],
}

export default configuration
