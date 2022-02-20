import baseConfiguration from '../eslint/no-invalid-this'

import Configuration from './no-invalid-this.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-invalid-this`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
