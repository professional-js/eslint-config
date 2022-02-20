import Configuration from './no-unused-vars.d'

export const priority = `IMPORTANT`
export const activate = true

const configuration:Configuration = {
	ruleId: `no-unused-vars`,
	providerId: `eslint`,
	priority,
	activate,
	options: [ {
		args: `after-used`,
		caughtErrors: `all`,
		ignoreRestSiblings: false,
		vars: `all`,
	} ],
}

export default configuration
