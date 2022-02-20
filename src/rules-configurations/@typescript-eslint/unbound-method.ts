import Configuration from './unbound-method.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/unbound-method`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		ignoreStatic: false,
	} ],
}

export default configuration
