import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	skipBlankLines?: boolean
	ignoreComments?: boolean
}>

type Configuration = RuleConfiguration<'no-trailing-spaces', 'eslint', Options>

export default Configuration
