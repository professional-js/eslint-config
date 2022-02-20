import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/func-call-spacing.d'

export type Options = Array<"never"> | Array<("always") | {
	allowNewlines?: boolean
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/func-call-spacing', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
