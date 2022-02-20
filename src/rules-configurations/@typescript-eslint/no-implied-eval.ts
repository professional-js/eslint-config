import baseConfiguration from '../eslint/no-implied-eval'

import Configuration from './no-implied-eval.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-implied-eval`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
