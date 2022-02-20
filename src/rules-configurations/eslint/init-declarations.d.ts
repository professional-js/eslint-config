import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<"always"> | Array<("never") | {
	ignoreForLoopInit?: boolean
}>

type Configuration = RuleConfiguration<'init-declarations', 'eslint', Options>

export default Configuration
