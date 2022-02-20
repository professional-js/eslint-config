import baseConfiguration from '../eslint/lines-between-class-members'

import Configuration from './lines-between-class-members.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/lines-between-class-members`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
