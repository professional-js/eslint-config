import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	ignoreCase?: boolean
}>

type Configuration = RuleConfiguration<'react/jsx-no-duplicate-props', 'eslint-plugin-react', Options>

export default Configuration
