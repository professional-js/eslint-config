import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	min?: number
	max?: number
	exceptions?: Array<string>
	exceptionPatterns?: Array<string>
	properties?: "always" | "never"
}>

type Configuration = RuleConfiguration<'id-length', 'eslint', Options>

export default Configuration
