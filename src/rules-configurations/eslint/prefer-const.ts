import Configuration from './prefer-const.d'

const configuration:Configuration = {
	ruleId: `prefer-const`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		destructuring: `any`,
		ignoreReadBeforeAssign: false,
	} ],
}

export default configuration
