import baseConfiguration from '../eslint/no-dupe-class-members'

import Configuration from './no-dupe-class-members.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-dupe-class-members`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
}

export default configuration
