import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/no-array-constructor.d'

export type Options = Array<never>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-array-constructor', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
