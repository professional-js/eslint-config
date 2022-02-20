import baseConfiguration, { optionsObject } from '../eslint/dot-notation'

import Configuration from './dot-notation.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/dot-notation`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
	options: [ {
		...optionsObject,
		allowPrivateClassPropertyAccess: false,
		allowProtectedClassPropertyAccess: false,
		// this is only ok in tandem with `noPropertyAccessFromIndexSignature`, and the plugin takes care of that 👍
		allowIndexSignaturePropertyAccess: false,
	} ],
}

export default configuration
