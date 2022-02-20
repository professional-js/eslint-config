import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	includeExports?: boolean
}>

type Configuration = RuleConfiguration<'no-duplicate-imports', 'eslint', Options>

export default Configuration
