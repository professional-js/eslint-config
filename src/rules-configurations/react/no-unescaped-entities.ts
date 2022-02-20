import Configuration from './no-unescaped-entities.d'

const configuration:Configuration = {
	ruleId: `react/no-unescaped-entities`,
	providerId: `eslint-plugin-react`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		forbid: [`<`, `>`, `"`, `'`, `{`, `}`],
	} ],
}

export default configuration
