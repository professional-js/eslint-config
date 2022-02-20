import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	ignoreVoid?: boolean
	ignoreIIFE?: boolean
}>

type Configuration = RuleConfiguration<'@typescript-eslint/no-floating-promises', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
