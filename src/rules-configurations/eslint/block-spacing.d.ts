import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<"always" | "never">

type Configuration = RuleConfiguration<'block-spacing', 'eslint', Options>

export default Configuration
