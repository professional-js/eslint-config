import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	ignoreNonDeclaration?: boolean
}>

type Configuration = RuleConfiguration<'no-multi-assign', 'eslint', Options>

export default Configuration
