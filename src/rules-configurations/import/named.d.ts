import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	commonjs?: boolean
}>

type Configuration = RuleConfiguration<'import/named', 'eslint-plugin-import', Options>

export default Configuration
