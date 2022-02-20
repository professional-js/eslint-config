import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowDestructuring?: boolean
	allowedNames?: Array<string>
}>

type Configuration = RuleConfiguration<'@typescript-eslint/no-this-alias', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
