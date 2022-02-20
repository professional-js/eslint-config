import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowAsStatement?: boolean
}>

type Configuration = RuleConfiguration<'no-void', 'eslint', Options>

export default Configuration
