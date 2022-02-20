import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowReferrer?: boolean
	enforceDynamicLinks?: "always" | "never"
	warnOnSpreadAttributes?: boolean
	links?: boolean
	forms?: boolean
}>

type Configuration = RuleConfiguration<'react/jsx-no-target-blank', 'eslint-plugin-react', Options>

export default Configuration
