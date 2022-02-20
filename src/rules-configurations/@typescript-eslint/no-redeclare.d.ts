import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/no-redeclare.d'

export type Options = Array<{
	builtinGlobals?: boolean
	ignoreDeclarationMerge?: boolean
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-redeclare', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
