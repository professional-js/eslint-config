import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	checksConditionals?: boolean
	checksVoidReturn?: boolean
}>

type Configuration = RuleConfiguration<'@typescript-eslint/no-misused-promises', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
