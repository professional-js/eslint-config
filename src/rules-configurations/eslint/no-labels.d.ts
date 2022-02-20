import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowLoop?: boolean
	allowSwitch?: boolean
}>

type Configuration = RuleConfiguration<'no-labels', 'eslint', Options>

export default Configuration
