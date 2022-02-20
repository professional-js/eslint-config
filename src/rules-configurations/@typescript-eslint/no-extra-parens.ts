import baseConfiguration from '../eslint/no-extra-parens'

import Configuration from './no-extra-parens.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-extra-parens`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
