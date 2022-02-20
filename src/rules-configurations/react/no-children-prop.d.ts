import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowFunctions?: boolean
}>

type Configuration = RuleConfiguration<'react/no-children-prop', 'eslint-plugin-react', Options>

export default Configuration
