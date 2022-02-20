import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<("always" | "never") | {
	arraysInObjects?: boolean
	objectsInObjects?: boolean
}>

type Configuration = RuleConfiguration<'object-curly-spacing', 'eslint', Options>

export default Configuration
