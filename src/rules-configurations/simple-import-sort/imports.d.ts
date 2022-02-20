import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	groups?: Array<Array<string>>
}>

type Configuration = RuleConfiguration<'simple-import-sort/imports', 'eslint-plugin-simple-import-sort', Options>

export default Configuration
