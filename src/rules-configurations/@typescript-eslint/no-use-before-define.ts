import baseConfiguration, { optionsObject } from '../eslint/no-use-before-define'

import Configuration from './no-use-before-define.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-use-before-define`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
	options: [ {
		...optionsObject,
		enums: true,
		ignoreTypeReferences: true, // allow mutually recursive types
		typedefs: true, // irrelevant due to `ignoreTypeReferences`
	} ],
}

export default configuration
