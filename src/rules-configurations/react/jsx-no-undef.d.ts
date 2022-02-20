import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowGlobals?: boolean
}>

type Configuration = RuleConfiguration<'react/jsx-no-undef', 'eslint-plugin-react', Options>

export default Configuration
