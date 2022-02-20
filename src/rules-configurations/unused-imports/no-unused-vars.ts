import baseConfiguration from '../eslint/no-unused-vars'

import Configuration from './no-unused-vars.d'

const configuration:Configuration = {
	ruleId: `unused-imports/no-unused-vars`,
	providerId: `eslint-plugin-unused-imports`,
	base: baseConfiguration,
}

export default configuration
