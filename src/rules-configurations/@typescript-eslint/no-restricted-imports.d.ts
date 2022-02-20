import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/no-restricted-imports.d'

export type Options = Array<unknown | {
	allowTypeImports?: boolean
}> | Array<{
	paths?: Array<unknown | {
		allowTypeImports?: boolean
	}>
	patterns?: unknown | Array<{
		allowTypeImports?: boolean
	}>
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-restricted-imports', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
