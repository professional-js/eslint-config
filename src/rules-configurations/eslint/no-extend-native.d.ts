import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	exceptions?: Array<string>
}>

type Configuration = RuleConfiguration<'no-extend-native', 'eslint', Options>

export default Configuration
