import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	align?: ("colon" | "value") | {
		mode?: "strict" | "minimum"
		on?: "colon" | "value"
		beforeColon?: boolean
		afterColon?: boolean
	}
	mode?: "strict" | "minimum"
	beforeColon?: boolean
	afterColon?: boolean
} | {
	singleLine?: {
		mode?: "strict" | "minimum"
		beforeColon?: boolean
		afterColon?: boolean
	}
	multiLine?: {
		align?: ("colon" | "value") | {
			mode?: "strict" | "minimum"
			on?: "colon" | "value"
			beforeColon?: boolean
			afterColon?: boolean
		}
		mode?: "strict" | "minimum"
		beforeColon?: boolean
		afterColon?: boolean
	}
} | {
	singleLine?: {
		mode?: "strict" | "minimum"
		beforeColon?: boolean
		afterColon?: boolean
	}
	multiLine?: {
		mode?: "strict" | "minimum"
		beforeColon?: boolean
		afterColon?: boolean
	}
	align?: {
		mode?: "strict" | "minimum"
		on?: "colon" | "value"
		beforeColon?: boolean
		afterColon?: boolean
	}
}>

type Configuration = RuleConfiguration<'key-spacing', 'eslint', Options>

export default Configuration
