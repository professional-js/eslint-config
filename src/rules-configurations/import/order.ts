import Configuration from './order.d'

const configuration:Configuration = {
	ruleId: `import/order`,
	providerId: `eslint-plugin-import`,
	priority: `TASTE`,
	activate: true,
	// TODO: make these configurable
	options: [ {
		groups: [
			`builtin`,
			`external`,
			`internal`,
			`parent`,
			`sibling`,
			`index`,
			`object`,
			`type`,
		],
		pathGroups: [],
		pathGroupsExcludedImportTypes: [],
		'newlines-between': `always`,
		alphabetize: {
			order: `asc`,
			caseInsensitive: true,
		},
		warnOnUnassignedImports: true,
	} ],
}

export default configuration
