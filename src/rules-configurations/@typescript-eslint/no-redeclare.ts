import baseConfiguration, { optionsObject } from '../eslint/no-redeclare'

import Configuration from './no-redeclare.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-redeclare`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
	options: [ {
		...optionsObject,
		ignoreDeclarationMerge: false,
	} ],
}

export default configuration
