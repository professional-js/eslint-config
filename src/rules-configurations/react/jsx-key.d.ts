import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	checkFragmentShorthand?: boolean
	checkKeyMustBeforeSpread?: boolean
}>

type Configuration = RuleConfiguration<'react/jsx-key', 'eslint-plugin-react', Options>

export default Configuration
