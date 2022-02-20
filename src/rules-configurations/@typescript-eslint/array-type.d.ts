import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	"default"?: "array" | "generic" | "array-simple"
	"readonly"?: "array" | "generic" | "array-simple"
}>

type Configuration = RuleConfiguration<'@typescript-eslint/array-type', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
