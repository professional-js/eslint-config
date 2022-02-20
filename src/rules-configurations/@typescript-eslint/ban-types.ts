import Configuration from './ban-types.d'

const configuration:Configuration = {
	ruleId: `@typescript-eslint/ban-types`,
	providerId: `@typescript-eslint/eslint-plugin`,
	priority: `HELPFUL`,
	activate: true,
	options: [ {
		extendDefaults: true,
		types: {
			any: {
				message: [
					`There is no valid use case for \`any\` outside of migrating to Typescript from a non-Typescript codebase.`,
					`In many cases, \`unknown\` is the correct type. Sometimes \`Record<string, unknown>\`.`,
					`In cases that fit neither, you need to really think about the type you are expecting.`,
				].join(`\n`),
				fixWith: `unknown`,
			},
		},
	} ],
}

export default configuration
