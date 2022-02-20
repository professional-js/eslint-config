import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/no-loss-of-precision.d'

export type Options = Array<never>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-loss-of-precision', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
