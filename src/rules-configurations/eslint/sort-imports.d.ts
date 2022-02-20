import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	ignoreCase?: boolean
	memberSyntaxSortOrder?: Array<"none" | "all" | "multiple" | "single">
	ignoreDeclarationSort?: boolean
	ignoreMemberSort?: boolean
	allowSeparatedGroups?: boolean
}>

type Configuration = RuleConfiguration<'sort-imports', 'eslint', Options>

export default Configuration
