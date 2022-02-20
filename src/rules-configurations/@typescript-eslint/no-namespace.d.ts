import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowDeclarations?: boolean
	allowDefinitionFiles?: boolean
}>

type Configuration = RuleConfiguration<'@typescript-eslint/no-namespace', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
