import baseConfiguration from '../eslint/no-restricted-imports'

import Configuration from './no-restricted-imports.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-restricted-imports`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
