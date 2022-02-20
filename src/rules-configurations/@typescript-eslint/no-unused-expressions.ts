import baseConfiguration from '../eslint/no-unused-expressions'

import Configuration from './no-unused-expressions.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-unused-expressions`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
