import baseConfiguration, { optionsObject } from '../eslint/no-shadow'

import Configuration from './no-shadow.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-shadow`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
	options: [ {
		...optionsObject,
	} ],
}

export default configuration
