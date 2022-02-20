import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	"object": string
	property?: string
	message?: string
} | {
	"object"?: string
	property: string
	message?: string
}>

type Configuration = RuleConfiguration<'no-restricted-properties', 'eslint', Options>

export default Configuration
