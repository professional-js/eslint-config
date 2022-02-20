import baseConfiguration from '../eslint/object-curly-spacing'

import Configuration from './object-curly-spacing.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/object-curly-spacing`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
