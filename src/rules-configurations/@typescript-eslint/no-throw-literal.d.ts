import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/no-throw-literal.d'

export type Options = Array<{
	allowThrowingAny?: boolean
	allowThrowingUnknown?: boolean
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-throw-literal', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
