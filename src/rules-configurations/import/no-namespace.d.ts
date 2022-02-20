import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	ignore?: Array<string>
}>

type Configuration = RuleConfiguration<'import/no-namespace', 'eslint-plugin-import', Options>

export default Configuration
