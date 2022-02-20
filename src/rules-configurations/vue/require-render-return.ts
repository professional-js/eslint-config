import baseConfiguration from '../react/require-render-return'

import Configuration from './require-render-return.d'

const configuration:Configuration = {
	...baseConfiguration,

	ruleId: `vue/require-render-return`,
	providerId: `eslint-plugin-vue`,
}

export default configuration
