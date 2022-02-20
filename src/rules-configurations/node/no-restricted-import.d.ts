import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<Array<string | {
	name: string | Array<string>
	message?: string
}>>

type Configuration = RuleConfiguration<'node/no-restricted-import', 'eslint-plugin-node', Options>

export default Configuration
