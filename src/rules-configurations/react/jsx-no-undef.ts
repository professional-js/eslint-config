import Configuration from './jsx-no-undef.d'

const configuration:Configuration = {
	ruleId: `react/jsx-no-undef`,
	providerId: `eslint-plugin-react`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		allowGlobals: false,
	} ],
}

export default configuration
