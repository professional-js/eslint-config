import baseConfiguration from '../eslint/no-empty-function'

import Configuration from './no-empty-function.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-empty-function`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
