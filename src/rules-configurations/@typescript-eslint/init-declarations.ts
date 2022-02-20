import baseConfiguration from '../eslint/init-declarations'

import Configuration from './init-declarations.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/init-declarations`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
