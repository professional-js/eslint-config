import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	fixToUnknown?: boolean
	ignoreRestArgs?: boolean
}>

type Configuration = RuleConfiguration<'@typescript-eslint/no-explicit-any', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
