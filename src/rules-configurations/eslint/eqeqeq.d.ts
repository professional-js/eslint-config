import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<("always") | {
	"null"?: "always" | "never" | "ignore"
}> | Array<"smart" | "allow-null">

type Configuration = RuleConfiguration<'eqeqeq', 'eslint', Options>

export default Configuration
