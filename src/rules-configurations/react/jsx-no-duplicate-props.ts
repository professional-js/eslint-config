import Configuration from './jsx-no-duplicate-props.d'

const configuration:Configuration = {
	ruleId: `react/jsx-no-duplicate-props`,
	providerId: `eslint-plugin-react`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		ignoreCase: false,
	} ],
}

export default configuration
