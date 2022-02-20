import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<string>

type Configuration = RuleConfiguration<'compat/compat', 'eslint-plugin-compat', Options>

export default Configuration
