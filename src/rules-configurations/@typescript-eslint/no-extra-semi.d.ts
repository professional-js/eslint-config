import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/no-extra-semi.d'

export type Options = Array<never>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-extra-semi', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
