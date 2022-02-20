import Configuration, { Options, StatementType } from './padding-line-between-statements.d'

const pad = (prev:StatementType, next:StatementType) => ([{
	blankLine: `always` as const,
	prev,
	next,
}])

const padAround = (inside:StatementType) => ([
	...pad(inside, `*`),
	...pad(`*`, inside),
])

const ignore = (prev:StatementType, next:StatementType) => ([{
	blankLine: `any` as const,
	prev,
	next,
}])

const ignoreSame = (...samesies:Array<StatementType>) => samesies.flatMap((same) => ignore(same, same))

export const optionsList:Options = [
	...padAround([`cjs-export`, `cjs-import`, `export`, `import`]),
	...ignoreSame(`cjs-export`, `cjs-import`, `export`, `import`),

	...padAround([`const`, `let`, `var`]),
	...ignoreSame(`singleline-const`, `singleline-let`, `singleline-var`),

	...padAround(`directive`),
	...ignoreSame(`directive`),

	...ignoreSame(`case`),
	...padAround(`default`),

	...padAround([`multiline-expression`, `multiline-block-like`]),

	...padAround([`return`, `break`, `continue`, `class`, `do`, `for`, `while`, `function`, `throw`, `try`]),

	...padAround(`with`),
]

const configuration:Configuration = {
	ruleId: `padding-line-between-statements`,
	providerId: `eslint`,
	priority: `HELPFUL`,
	activate: true,
	options: optionsList,
}

export default configuration
