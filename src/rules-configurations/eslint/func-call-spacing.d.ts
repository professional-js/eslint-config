import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<"never"> | Array<("always") | {
	allowNewlines?: boolean
}>

type Configuration = RuleConfiguration<'func-call-spacing', 'eslint', Options>

export default Configuration
