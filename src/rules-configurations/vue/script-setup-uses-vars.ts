import { activate, priority } from '../eslint/no-unused-vars'

import Configuration from './script-setup-uses-vars.d'

const configuration:Configuration = {
	ruleId: `vue/script-setup-uses-vars`,
	providerId: `eslint-plugin-vue`,
	priority,
	activate,
	options: [],
}

export default configuration
