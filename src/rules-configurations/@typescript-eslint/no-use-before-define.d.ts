import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/no-use-before-define.d'

export type Options = Array<("nofunc") | {
	functions?: boolean
	classes?: boolean
	enums?: boolean
	variables?: boolean
	typedefs?: boolean
	ignoreTypeReferences?: boolean
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-use-before-define', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
