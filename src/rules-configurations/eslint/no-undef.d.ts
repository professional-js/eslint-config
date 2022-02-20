import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	"typeof"?: boolean
}>

type Configuration = RuleConfiguration<'no-undef', 'eslint', Options>

export default Configuration
