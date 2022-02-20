import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	ignoreStatic?: boolean
}>

type Configuration = RuleConfiguration<'@typescript-eslint/unbound-method', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
