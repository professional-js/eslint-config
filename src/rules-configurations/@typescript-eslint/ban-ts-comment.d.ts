import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	"ts-expect-error"?: boolean | ("allow-with-description")
	"ts-ignore"?: boolean | ("allow-with-description")
	"ts-nocheck"?: boolean | ("allow-with-description")
	"ts-check"?: boolean | ("allow-with-description")
	minimumDescriptionLength?: number
}>

type Configuration = RuleConfiguration<'@typescript-eslint/ban-ts-comment', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
