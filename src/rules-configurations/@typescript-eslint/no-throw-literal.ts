import baseConfiguration from '../eslint/no-throw-literal'

import Configuration from './no-throw-literal.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-throw-literal`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
	options: [ {
		allowThrowingAny: false, // no `any` ever
		allowThrowingUnknown: true, // rethrow from `catch`
	} ],
}

export default configuration
