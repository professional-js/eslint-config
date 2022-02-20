import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<"except-parens" | "always">

type Configuration = RuleConfiguration<'no-return-assign', 'eslint', Options>

export default Configuration
