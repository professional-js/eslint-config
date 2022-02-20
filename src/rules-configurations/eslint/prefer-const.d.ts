import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	destructuring?: "any" | "all"
	ignoreReadBeforeAssign?: boolean
}>

type Configuration = RuleConfiguration<'prefer-const', 'eslint', Options>

export default Configuration
