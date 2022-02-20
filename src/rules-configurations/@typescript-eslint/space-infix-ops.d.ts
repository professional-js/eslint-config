import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/space-infix-ops.d'

export type Options = Array<{
	int32Hint?: boolean
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/space-infix-ops', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
