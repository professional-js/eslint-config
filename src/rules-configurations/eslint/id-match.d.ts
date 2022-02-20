import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<string | {
	properties?: boolean
	classFields?: boolean
	onlyDeclarations?: boolean
	ignoreDestructuring?: boolean
}>

type Configuration = RuleConfiguration<'id-match', 'eslint', Options>

export default Configuration
