import Configuration from './no-irregular-whitespace.d'

const configuration:Configuration = {
	ruleId: `no-irregular-whitespace`,
	providerId: `eslint`,
	priority: `IMPORTANT`,
	activate: true,
	options: [ {
		skipComments: false,
		skipRegExps: false,
		skipStrings: false,
		skipTemplates: false,
	} ],
}

export default configuration
