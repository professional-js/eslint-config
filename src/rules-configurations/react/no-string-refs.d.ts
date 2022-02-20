import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	noTemplateLiterals?: boolean
}>

type Configuration = RuleConfiguration<'react/no-string-refs', 'eslint-plugin-react', Options>

export default Configuration
