import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/object-curly-spacing.d'

export type Options = Array<("always" | "never") | {
	arraysInObjects?: boolean
	objectsInObjects?: boolean
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/object-curly-spacing', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
