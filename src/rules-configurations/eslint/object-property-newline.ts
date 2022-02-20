import Configuration from './object-property-newline.d'

const configuration:Configuration = {
	ruleId: `object-property-newline`,
	providerId: `eslint`,
	priority: `TASTE`,
	activate: true,
	options: [ {
		allowAllPropertiesOnSameLine: true,
	} ],
}

export default configuration
