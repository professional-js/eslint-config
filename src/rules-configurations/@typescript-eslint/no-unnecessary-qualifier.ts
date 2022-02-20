import Configuration from './no-unnecessary-qualifier.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-unnecessary-qualifier`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `HELPFUL`,
	activate: true,
	options: [],
}

export default configuration
