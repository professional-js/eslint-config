import Configuration from './no-this-alias.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-this-alias`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		allowDestructuring: true,
		allowedNames: [],
	} ],
}

export default configuration
