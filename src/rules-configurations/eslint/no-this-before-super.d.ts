import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<never>

type Configuration = RuleConfiguration<'no-this-before-super', 'eslint', Options>

export default Configuration
