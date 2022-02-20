import baseConfiguration from '../eslint/no-array-constructor'

import Configuration from './no-array-constructor.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-array-constructor`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
