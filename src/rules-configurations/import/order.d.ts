import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	groups?: unknown
	pathGroupsExcludedImportTypes?: unknown
	pathGroups?: Array<{
		pattern: string
		patternOptions?: object
		group: "builtin" | "external" | "internal" | "unknown" | "parent" | "sibling" | "index" | "object" | "type"
		position?: "after" | "before"
	}>
	"newlines-between"?: "ignore" | "always" | "always-and-inside-groups" | "never"
	alphabetize?: {
		caseInsensitive?: boolean
		order?: "ignore" | "asc" | "desc"
	}
	warnOnUnassignedImports?: boolean
}>

type Configuration = RuleConfiguration<'import/order', 'eslint-plugin-import', Options>

export default Configuration
