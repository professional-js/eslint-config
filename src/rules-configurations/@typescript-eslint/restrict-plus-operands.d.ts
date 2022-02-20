import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	checkCompoundAssignments?: boolean
	allowAny?: boolean
}>

type Configuration = RuleConfiguration<'@typescript-eslint/restrict-plus-operands', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
