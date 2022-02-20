import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	skipComments?: boolean
	skipStrings?: boolean
	skipTemplates?: boolean
	skipRegExps?: boolean
}>

type Configuration = RuleConfiguration<'no-irregular-whitespace', 'eslint', Options>

export default Configuration
