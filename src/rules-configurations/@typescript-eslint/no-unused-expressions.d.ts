import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/no-unused-expressions.d'

export type Options = Array<{
	allowShortCircuit?: boolean
	allowTernary?: boolean
	allowTaggedTemplates?: boolean
	enforceForJSX?: boolean
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-unused-expressions', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
