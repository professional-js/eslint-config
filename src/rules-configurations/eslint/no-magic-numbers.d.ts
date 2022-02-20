import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	detectObjects?: boolean
	enforceConst?: boolean
	ignore?: Array<number | string>
	ignoreArrayIndexes?: boolean
	ignoreDefaultValues?: boolean
}>

type Configuration = RuleConfiguration<'no-magic-numbers', 'eslint', Options>

export default Configuration
