import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/no-duplicate-imports.d'

export type Options = Array<{
	includeExports?: boolean
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-duplicate-imports', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
