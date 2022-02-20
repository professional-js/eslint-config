import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<never>

type Configuration = RuleConfiguration<'import/no-deprecated', 'eslint-plugin-import', Options>

export default Configuration
