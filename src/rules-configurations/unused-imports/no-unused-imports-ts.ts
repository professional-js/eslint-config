import { priority } from '../eslint/no-unused-vars'

import Configuration from './no-unused-imports-ts.d'

const configuration:Configuration = {
	ruleId: `unused-imports/no-unused-imports-ts`,
	providerId: `eslint-plugin-unused-imports`,
	priority,
	activate: false,
}

export default configuration
