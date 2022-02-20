import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/semi.d'

export type Options = Array<("never") | {
	beforeStatementContinuationChars?: "always" | "any" | "never"
}> | Array<("always") | {
	omitLastInOneLineBlock?: boolean
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/semi', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
