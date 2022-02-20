import baseConfiguration from '../eslint/func-call-spacing'

import Configuration from './func-call-spacing.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/func-call-spacing`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
