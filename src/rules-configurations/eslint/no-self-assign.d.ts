import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	props?: boolean
}>

type Configuration = RuleConfiguration<'no-self-assign', 'eslint', Options>

export default Configuration
