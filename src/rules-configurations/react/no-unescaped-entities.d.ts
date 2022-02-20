import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	forbid?: Array<string | {
		char?: string
		alternatives?: Array<string>
	}>
}>

type Configuration = RuleConfiguration<'react/no-unescaped-entities', 'eslint-plugin-react', Options>

export default Configuration
