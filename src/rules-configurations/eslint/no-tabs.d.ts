import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowIndentationTabs?: boolean
}>

type Configuration = RuleConfiguration<'no-tabs', 'eslint', Options>

export default Configuration
