import baseConfiguration from '../eslint/require-await'

import Configuration from './require-await.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/require-await`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
