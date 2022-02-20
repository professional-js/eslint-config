import Configuration, { Options } from './dot-notation.d'

export const optionsObject : Options[number] = {
	allowKeywords: true,
}

const configuration:Configuration = {
	ruleId: `dot-notation`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ optionsObject ],
}

export default configuration
