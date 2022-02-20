import baseConfiguration from '../eslint/no-loss-of-precision'

import Configuration from './no-loss-of-precision.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-loss-of-precision`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
