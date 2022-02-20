import baseConfiguration, { optionsObject } from '../eslint/no-magic-numbers'

import Configuration from './no-magic-numbers.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-magic-numbers`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
	options: [ {
		...optionsObject,

		// TODO: make these configurable
		ignoreEnums: true,
		ignoreNumericLiteralTypes: true,
		ignoreReadonlyClassProperties: true,
	} ],
}

export default configuration
