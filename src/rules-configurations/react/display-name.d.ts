import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	ignoreTranspilerName?: boolean
}>

type Configuration = RuleConfiguration<'react/display-name', 'eslint-plugin-react', Options>

export default Configuration
