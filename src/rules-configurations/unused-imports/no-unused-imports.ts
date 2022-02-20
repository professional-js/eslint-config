import baseConfiguration from '../eslint/no-unused-vars'

import Configuration from './no-unused-imports.d'

const configuration:Configuration = {
	...baseConfiguration,

	ruleId: `unused-imports/no-unused-imports`,
	providerId: `eslint-plugin-unused-imports`,
}

export default configuration
