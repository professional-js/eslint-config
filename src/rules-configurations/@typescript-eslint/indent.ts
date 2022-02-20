import baseConfiguration from '../eslint/indent'

import Configuration from './indent.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/indent`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
