import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<("after" | "before" | "none" | "null") | {
	overrides?: {
		[key: string]: "after" | "before" | "none" | "ignore"
	}
}>

type Configuration = RuleConfiguration<'operator-linebreak', 'eslint', Options>

export default Configuration
