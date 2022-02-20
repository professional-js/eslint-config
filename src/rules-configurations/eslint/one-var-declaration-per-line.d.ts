import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<"always" | "initializations">

type Configuration = RuleConfiguration<'one-var-declaration-per-line', 'eslint', Options>

export default Configuration
