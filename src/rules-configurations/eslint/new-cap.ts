import Configuration from './new-cap.d'

const configuration:Configuration = {
	ruleId: `new-cap`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		newIsCap: true,
		capIsNew: true,
		properties: true,
	} ],
}

export default configuration
