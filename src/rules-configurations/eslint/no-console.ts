import Configuration from './no-console.d'

const configuration:Configuration = {
	ruleId: `no-console`,
	providerId: `eslint`,
	// TODO: allow to ignore everywhere except in the browser
	ignore: true,
}

export default configuration
