import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/lines-between-class-members.d'

export type Options = Array<("always" | "never") | {
	exceptAfterSingleLine?: boolean
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/lines-between-class-members', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
