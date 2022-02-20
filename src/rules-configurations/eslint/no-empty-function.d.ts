import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allow?: Array<"functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "asyncFunctions" | "asyncMethods">
}>

type Configuration = RuleConfiguration<'no-empty-function', 'eslint', Options>

export default Configuration
