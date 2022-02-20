import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowSingleExtends?: boolean
}>

type Configuration = RuleConfiguration<'@typescript-eslint/no-empty-interface', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
