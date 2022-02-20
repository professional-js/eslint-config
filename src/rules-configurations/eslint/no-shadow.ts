import Configuration, { Options } from './no-shadow.d'

export const optionsObject : Options[number] = {
	builtinGlobals: false,
	hoist: `all`,
	// TODO: make this configurable
	allow: [],
}

const configuration:Configuration = {
	ruleId: `no-shadow`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: [ optionsObject ],
}

export default configuration
