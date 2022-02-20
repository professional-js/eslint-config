import baseConfiguration from '../eslint/space-before-function-paren'

import Configuration from './space-before-function-paren.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/space-before-function-paren`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
