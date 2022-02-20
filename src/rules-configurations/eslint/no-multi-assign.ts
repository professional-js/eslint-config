import Configuration from './no-multi-assign.d'

const configuration:Configuration = {
	ruleId: `no-multi-assign`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		ignoreNonDeclaration: false,
	} ],
}

export default configuration
