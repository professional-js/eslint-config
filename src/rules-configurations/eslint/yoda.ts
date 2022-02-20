import Configuration from './yoda.d'

const configuration:Configuration = {
	ruleId: `yoda`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ `never`, { 'exceptRange': true } ],
}

export default configuration
