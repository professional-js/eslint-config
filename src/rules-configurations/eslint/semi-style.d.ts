import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<"last" | "first">

type Configuration = RuleConfiguration<'semi-style', 'eslint', Options>

export default Configuration
