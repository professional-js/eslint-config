import { builtinModules } from 'module'

import Configuration from './imports.d'

const configuration:Configuration = {
	ruleId: `simple-import-sort/imports`,
	providerId: `eslint-plugin-simple-import-sort`,
	priority: `TASTE`,
	activate: true,
	options: [ {
		// TODO: make this configurable
		// @see https://github.com/lydell/eslint-plugin-simple-import-sort#custom-grouping
		groups: [
			// Builtins
			[`^(?:${builtinModules.join(`|`)})$`],

			// Externals/Packages
			// Things that start with a letter (or digit or underscore), or `@` followed by a letter
			[`^@?\\w`],

			// Other imports such as Vue-style `@/foo`
			// Anything not matched in another group
			[`^`],

			// Locals (ancestors and such, except siblings)
			// Anything that starts with a double dot
			[`^\\.\\.`],

			// Siblings
			// Anything that starts with a single dot
			[`^\\.`],

			// Side effect imports
			[`^\\u0000`],

			// Absolute paths, even more dangerous than side effects
			[`^(?:\\w+:)?[\\\\/]`],
		],
	} ],
}

export default configuration
