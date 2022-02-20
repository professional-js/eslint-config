import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	commonjs?: boolean
	amd?: boolean
	esmodule?: boolean
	ignore?: Array<string>
}>

type Configuration = RuleConfiguration<'import/no-absolute-path', 'eslint-plugin-import', Options>

export default Configuration
