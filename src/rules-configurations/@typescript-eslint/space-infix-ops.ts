import baseConfiguration from '../eslint/space-infix-ops'

import Configuration from './space-infix-ops.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/space-infix-ops`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
