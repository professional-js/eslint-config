import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<string>

type Configuration = RuleConfiguration<'id-denylist', 'eslint', Options>

export default Configuration
