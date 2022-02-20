import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	ignore?: Array<string>
}>

type Configuration = RuleConfiguration<'react/no-unknown-property', 'eslint-plugin-react', Options>

export default Configuration
