import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	checkAliases?: boolean
}>

type Configuration = RuleConfiguration<'react/no-unsafe', 'eslint-plugin-react', Options>

export default Configuration
