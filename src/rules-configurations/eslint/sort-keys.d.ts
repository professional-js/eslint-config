import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<("asc" | "desc") | {
	caseSensitive?: boolean
	natural?: boolean
	minKeys?: number
}>

type Configuration = RuleConfiguration<'sort-keys', 'eslint', Options>

export default Configuration
