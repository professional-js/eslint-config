import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	considerQueryString?: boolean
}>

type Configuration = RuleConfiguration<'import/no-duplicates', 'eslint-plugin-import', Options>

export default Configuration
