import Configuration from './triple-slash-reference.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/triple-slash-reference`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		lib: `never`,
		path: `never`,
		types: `never`,
	} ],
}

export default configuration
