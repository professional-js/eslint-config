import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/default-param-last.d'

export type Options = Array<never>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/default-param-last', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
