import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	checkNever?: boolean
}>

type Configuration = RuleConfiguration<'@typescript-eslint/no-meaningless-void-operator', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
