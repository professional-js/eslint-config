import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<"unix" | "windows">

type Configuration = RuleConfiguration<'linebreak-style', 'eslint', Options>

export default Configuration
