import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<"smart-tabs" | "true" | "false">

type Configuration = RuleConfiguration<'no-mixed-spaces-and-tabs', 'eslint', Options>

export default Configuration
