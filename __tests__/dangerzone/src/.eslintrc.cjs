module.exports = require('@professional-js/eslint-config/make')({
	priorities: [ 'IMPORTANT', 'HELPFUL', 'TASTE' ],
	dangerzone: [ 'curly' ],
	overrides: {
		root: true,
		parserOptions: {
			ecmaVersion: 2021,
		},
	},
})
