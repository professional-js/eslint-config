import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	ignore?: Array<string>
	customValidators?: Array<string>
	skipUndeclared?: boolean
}>

type Configuration = RuleConfiguration<'react/prop-types', 'eslint-plugin-react', Options>

export default Configuration
