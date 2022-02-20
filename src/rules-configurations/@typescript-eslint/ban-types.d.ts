import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	types?: {
		[key: string]: null | boolean | string | {
			message?: string
			fixWith?: string
		}
	}
	extendDefaults?: boolean
}>

type Configuration = RuleConfiguration<'@typescript-eslint/ban-types', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
