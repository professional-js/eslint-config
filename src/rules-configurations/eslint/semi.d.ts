import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<("never") | {
	beforeStatementContinuationChars?: "always" | "any" | "never"
}> | Array<("always") | {
	omitLastInOneLineBlock?: boolean
}>

type Configuration = RuleConfiguration<'semi', 'eslint', Options>

export default Configuration
