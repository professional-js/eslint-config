import Configuration from './no-misused-promises.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-misused-promises`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `IMPORTANT`,
	activate: true,
	options: [
		{
			checksConditionals: true,
			checksVoidReturn: true,
		} ],
}

export default configuration
