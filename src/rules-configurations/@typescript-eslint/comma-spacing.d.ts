import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/comma-spacing.d'

export type Options = Array<{
	before?: boolean
	after?: boolean
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/comma-spacing', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
