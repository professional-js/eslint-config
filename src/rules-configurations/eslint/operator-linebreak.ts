import Configuration from './operator-linebreak.d'

const configuration:Configuration = {
	ruleId: `operator-linebreak`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [ `before` ],
}

export default configuration
