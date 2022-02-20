import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<never>

type Configuration = RuleConfiguration<'no-loss-of-precision', 'eslint', Options>

export default Configuration
