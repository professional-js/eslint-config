import baseConfiguration from '../eslint/default-param-last'

import Configuration from './default-param-last.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/default-param-last`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
