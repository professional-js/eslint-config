import baseConfiguration from '../eslint/no-unused-vars'

import Configuration from './no-unused-vars.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-unused-vars`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
