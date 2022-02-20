import baseConfiguration from '../eslint/no-extra-semi'

import Configuration from './no-extra-semi.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-extra-semi`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
