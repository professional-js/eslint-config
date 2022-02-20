import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<"always" | "never">

type Configuration = RuleConfiguration<'new-parens', 'eslint', Options>

export default Configuration
