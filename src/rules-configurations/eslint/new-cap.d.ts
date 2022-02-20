import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	newIsCap?: boolean
	capIsNew?: boolean
	newIsCapExceptions?: Array<string>
	newIsCapExceptionPattern?: string
	capIsNewExceptions?: Array<string>
	capIsNewExceptionPattern?: string
	properties?: boolean
}>

type Configuration = RuleConfiguration<'new-cap', 'eslint', Options>

export default Configuration
