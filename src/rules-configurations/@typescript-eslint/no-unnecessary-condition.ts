// import baseConfiguration from '../eslint/no-constant-condition'
import Configuration from './no-unnecessary-condition.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/no-unnecessary-condition`,
	providerId: `@typescript-eslint/eslint-plugin`,
	/**
	 * TODO: find elegant way to override
	 * This is non-standard because it is not directly related according to the rule's meta data.
	 * It is the spiritual override, however.
	 * @see https://typescript-eslint.io/rules/no-unnecessary-condition/#related-to
	 */
	// base: baseConfiguration,
	priority: `IMPORTANT`,
	activate: true,
	options: [{
		allowConstantLoopConditions: false,
		allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
	}],
}

export default configuration
