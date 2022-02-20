import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowNumber?: boolean
	allowBoolean?: boolean
	allowAny?: boolean
	allowNullish?: boolean
	allowRegExp?: boolean
}>

type Configuration = RuleConfiguration<'@typescript-eslint/restrict-template-expressions', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
