import Configuration, { Options } from './no-use-before-define.d'

export const optionsObject : Exclude<Options[number], string> = {
	functions: false,
	classes: true,
	variables: true,
}

const configuration:Configuration = {
	ruleId: `no-use-before-define`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ optionsObject ],
}

export default configuration
