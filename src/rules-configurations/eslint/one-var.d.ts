import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<("always" | "never" | "consecutive") | {
	separateRequires?: boolean
	"var"?: "always" | "never" | "consecutive"
	"let"?: "always" | "never" | "consecutive"
	"const"?: "always" | "never" | "consecutive"
} | {
	initialized?: "always" | "never" | "consecutive"
	uninitialized?: "always" | "never" | "consecutive"
}>

type Configuration = RuleConfiguration<'one-var', 'eslint', Options>

export default Configuration
