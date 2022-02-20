import Configuration from './no-unused-expressions.d'

const optionsObject = {
	allowShortCircuit: false,
	allowTaggedTemplates: false,
	allowTernary: false,
	enforceForJSX: true,
}

const configuration:Configuration = {
	ruleId: `no-unused-expressions`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ optionsObject ],
	optionsDangerzone: [ {
		...optionsObject,
		allowShortCircuit: true,
	} ],
}

export default configuration
