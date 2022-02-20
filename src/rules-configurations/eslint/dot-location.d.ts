import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<"object" | "property">

type Configuration = RuleConfiguration<'dot-location', 'eslint', Options>

export default Configuration
