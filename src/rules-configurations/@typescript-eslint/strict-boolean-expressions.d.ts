import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	allowString?: boolean
	allowNumber?: boolean
	allowNullableObject?: boolean
	allowNullableBoolean?: boolean
	allowNullableString?: boolean
	allowNullableNumber?: boolean
	allowAny?: boolean
	allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
}>

type Configuration = RuleConfiguration<'@typescript-eslint/strict-boolean-expressions', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
