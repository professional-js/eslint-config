import baseConfiguration from '../eslint/comma-spacing'

import Configuration from './comma-spacing.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/comma-spacing`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
