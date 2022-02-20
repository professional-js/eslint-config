import baseConfiguration from '../eslint/no-duplicate-imports'

import Configuration from './no-duplicate-imports.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-duplicate-imports`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
