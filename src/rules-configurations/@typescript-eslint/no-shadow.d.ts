import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/no-shadow.d'

export type Options = Array<{
	builtinGlobals?: boolean
	hoist?: "all" | "functions" | "never"
	allow?: Array<string>
	ignoreTypeValueShadow?: boolean
	ignoreFunctionTypeParameterNameValueShadow?: boolean
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-shadow', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
