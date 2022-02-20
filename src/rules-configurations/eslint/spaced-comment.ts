import Configuration from './spaced-comment.d'

const configuration:Configuration = {
	ruleId: `spaced-comment`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [
		`always`,
		{
			// TODO: make markers and exceptions configurable
			markers: [],
			exceptions: [],
			block: {
				balanced: true,
				markers: [],
				exceptions: [ `*` ],
			},
			line: {
				markers: [ `/` ],
				exceptions: [`/`, `-` ],
			},
		},
	],
}

export default configuration
