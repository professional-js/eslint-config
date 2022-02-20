import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<"always" | "as-needed">

type Configuration = RuleConfiguration<'radix', 'eslint', Options>

export default Configuration
