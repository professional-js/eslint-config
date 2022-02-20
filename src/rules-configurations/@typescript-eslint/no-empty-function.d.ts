import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/no-empty-function.d'

export type Options = Array<{
	allow?: Array<"functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "private-constructors" | "protected-constructors" | "asyncFunctions" | "asyncMethods" | "decoratedFunctions">
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-empty-function', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
