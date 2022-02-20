import baseConfiguration from '../eslint/keyword-spacing'

import Configuration from './keyword-spacing.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/keyword-spacing`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
