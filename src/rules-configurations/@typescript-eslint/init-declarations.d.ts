import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/init-declarations.d'

export type Options = Array<"always"> | Array<("never") | {
	ignoreForLoopInit?: boolean
}>

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/init-declarations', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
