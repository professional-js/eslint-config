import baseConfiguration from '../react/jsx-uses-vars'

import Configuration from './jsx-uses-vars.d'

const configuration:Configuration = {
	...baseConfiguration,

	ruleId: `vue/jsx-uses-vars`,
	providerId: `eslint-plugin-vue`,
}

export default configuration
