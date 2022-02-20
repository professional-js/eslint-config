import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	max: number
	maxEOF?: number
	maxBOF?: number
}>

type Configuration = RuleConfiguration<'no-multiple-empty-lines', 'eslint', Options>

export default Configuration
