import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	disallowArithmeticOperators?: boolean
}>

type Configuration = RuleConfiguration<'no-unsafe-optional-chaining', 'eslint', Options>

export default Configuration
