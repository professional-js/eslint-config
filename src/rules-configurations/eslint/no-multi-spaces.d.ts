import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	exceptions?: object
	ignoreEOLComments?: boolean
}>

type Configuration = RuleConfiguration<'no-multi-spaces', 'eslint', Options>

export default Configuration
