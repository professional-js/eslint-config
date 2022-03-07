const DEACTIVATE = `off`

module.exports = {
	// non-fixable rules that don't help when applied after transpilation and bundling
	rules: {
		"no-cond-assign": DEACTIVATE,
		"no-return-assign": DEACTIVATE,

		"@typescript-eslint/init-declarations": DEACTIVATE,
		"@typescript-eslint/no-magic-numbers": DEACTIVATE,
		"@typescript-eslint/no-shadow": DEACTIVATE,
		"@typescript-eslint/no-unsafe-argument": DEACTIVATE,
		"@typescript-eslint/no-unsafe-assignment": DEACTIVATE,
		"@typescript-eslint/no-unsafe-call": DEACTIVATE,
		"@typescript-eslint/no-unsafe-member-access": DEACTIVATE,
		"@typescript-eslint/no-unsafe-return": DEACTIVATE,
		"@typescript-eslint/no-unused-expressions": DEACTIVATE,
		"@typescript-eslint/no-var-requires": DEACTIVATE,
		"@typescript-eslint/strict-boolean-expressions": DEACTIVATE,
	},
}
