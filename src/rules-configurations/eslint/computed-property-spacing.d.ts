import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<("always" | "never") | {
	enforceForClassMembers?: boolean
}>

type Configuration = RuleConfiguration<'computed-property-spacing', 'eslint', Options>

export default Configuration
