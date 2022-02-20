import { activate, priority } from '../eslint/no-unused-vars'

import Configuration from './jsx-uses-vars.d'

const configuration:Configuration = {
	ruleId: `react/jsx-uses-vars`,
	providerId: `eslint-plugin-react`,
	priority,
	activate,
	options: [],
}

export default configuration
