import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	words?: boolean
	nonwords?: boolean
	overrides?: {
		[key: string]: boolean
	}
}>

type Configuration = RuleConfiguration<'space-unary-ops', 'eslint', Options>

export default Configuration
