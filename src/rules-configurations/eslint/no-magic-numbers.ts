import Configuration, { Options } from './no-magic-numbers.d'

export const optionsObject : Options[number] = {
	ignore: [],
	ignoreArrayIndexes: false,
	// TODO: make this configurable
	ignoreDefaultValues: true,
	enforceConst: false,
	// TODO: make this configurable
	detectObjects: false,
}

const configuration:Configuration = {
	ruleId: `no-magic-numbers`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ optionsObject ],
}

export default configuration
