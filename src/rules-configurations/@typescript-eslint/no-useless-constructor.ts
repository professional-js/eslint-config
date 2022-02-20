import baseConfiguration from '../eslint/no-useless-constructor'

import Configuration from './no-useless-constructor.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-useless-constructor`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
