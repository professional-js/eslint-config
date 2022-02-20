import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/comma-dangle.d'

export type Value = "always-multiline" | "always" | "never" | "only-multiline"

export type ValueWithIgnore = "always-multiline" | "always" | "never" | "only-multiline" | "ignore"

export type Options = Array<Value | {
	arrays?: ValueWithIgnore
	objects?: ValueWithIgnore
	imports?: ValueWithIgnore
	exports?: ValueWithIgnore
	functions?: ValueWithIgnore
	enums?: ValueWithIgnore
	generics?: ValueWithIgnore
	tuples?: ValueWithIgnore
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/comma-dangle', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
