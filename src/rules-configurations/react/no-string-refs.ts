import Configuration from './no-string-refs.d'

const configuration:Configuration = {
	ruleId: `react/no-string-refs`,
	providerId: `eslint-plugin-react`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		noTemplateLiterals: true,
	} ],
}

export default configuration
