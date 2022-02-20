import baseConfiguration from '../eslint/comma-dangle'

import Configuration from './comma-dangle.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/comma-dangle`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
