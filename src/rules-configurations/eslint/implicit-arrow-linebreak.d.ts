import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<"beside" | "below">

type Configuration = RuleConfiguration<'implicit-arrow-linebreak', 'eslint', Options>

export default Configuration
