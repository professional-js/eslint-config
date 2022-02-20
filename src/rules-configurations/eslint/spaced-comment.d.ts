import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<("always" | "never") | {
	exceptions?: Array<string>
	markers?: Array<string>
	line?: {
		exceptions?: Array<string>
		markers?: Array<string>
	}
	block?: {
		exceptions?: Array<string>
		markers?: Array<string>
		balanced?: boolean
	}
}>

type Configuration = RuleConfiguration<'spaced-comment', 'eslint', Options>

export default Configuration
