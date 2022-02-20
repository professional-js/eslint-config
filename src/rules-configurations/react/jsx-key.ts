import Configuration from './jsx-key.d'

const configuration:Configuration = {
	ruleId: `react/jsx-key`,
	providerId: `eslint-plugin-react`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		checkFragmentShorthand: true,
		checkKeyMustBeforeSpread: false,
	} ],
	optionsDangerzone: [ {
		checkFragmentShorthand: true,
		checkKeyMustBeforeSpread: true,
	} ],
}

export default configuration
