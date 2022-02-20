import baseConfiguration from '../eslint/brace-style'

import Configuration from './brace-style.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/brace-style`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
