import { priority } from '../eslint/no-unused-vars'

import Configuration from './no-unused-vars-ts.d'

const configuration:Configuration = {
	ruleId: `unused-imports/no-unused-vars-ts`,
	providerId: `eslint-plugin-unused-imports`,
	priority,
	activate: false,
}

export default configuration
