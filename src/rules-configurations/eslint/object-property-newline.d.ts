import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowAllPropertiesOnSameLine?: boolean
	allowMultiplePropertiesPerLine?: boolean
}>

type Configuration = RuleConfiguration<'object-property-newline', 'eslint', Options>

export default Configuration
