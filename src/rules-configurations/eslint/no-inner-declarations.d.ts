import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<"functions" | "both">

type Configuration = RuleConfiguration<'no-inner-declarations', 'eslint', Options>

export default Configuration
