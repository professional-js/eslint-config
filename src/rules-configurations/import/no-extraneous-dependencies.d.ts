import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = Array<{
	devDependencies?: boolean | unknown
	optionalDependencies?: boolean | unknown
	peerDependencies?: boolean | unknown
	bundledDependencies?: boolean | unknown
	packageDir?: string | unknown
}>

type Configuration = RuleConfiguration<'import/no-extraneous-dependencies', 'eslint-plugin-import', Options>

export default Configuration
