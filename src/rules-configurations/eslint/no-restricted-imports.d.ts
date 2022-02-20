import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<string | {
	name: string
	message?: string
	importNames?: Array<string>
}> | Array<{
	paths?: Array<string | {
		name: string
		message?: string
		importNames?: Array<string>
	}>
	patterns?: Array<string> | Array<{
		group: Array<string>
		message?: string
		caseSensitive?: boolean
	}>
}>

type Configuration = RuleConfiguration<'no-restricted-imports', 'eslint', Options>

export default Configuration
