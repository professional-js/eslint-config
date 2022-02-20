import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<"interface" | "type">

type Configuration = RuleConfiguration<'@typescript-eslint/consistent-type-definitions', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
