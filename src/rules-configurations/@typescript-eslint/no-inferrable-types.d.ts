import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	ignoreParameters?: boolean
	ignoreProperties?: boolean
}>

type Configuration = RuleConfiguration<'@typescript-eslint/no-inferrable-types', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
