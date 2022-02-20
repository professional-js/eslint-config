import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<"always" | "ignorePackages" | "never"> | Array<("always" | "ignorePackages" | "never") | {
	pattern?: object
	ignorePackages?: boolean
}> | Array<{
	pattern?: object
	ignorePackages?: boolean
}> | Array<object> | Array<("always" | "ignorePackages" | "never") | object>

type Configuration = RuleConfiguration<'import/extensions', 'eslint-plugin-import', Options>

export default Configuration
