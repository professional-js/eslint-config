import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	disallowRedundantWrapping?: boolean
}>

type Configuration = RuleConfiguration<'prefer-regex-literals', 'eslint', Options>

export default Configuration
