import baseConfiguration from '../eslint/quotes'

import Configuration from './quotes.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/quotes`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
