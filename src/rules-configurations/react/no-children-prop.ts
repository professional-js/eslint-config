import Configuration from './no-children-prop.d'

const configuration:Configuration = {
	ruleId: `react/no-children-prop`,
	providerId: `eslint-plugin-react`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		allowFunctions: false,
	} ],
}

export default configuration
