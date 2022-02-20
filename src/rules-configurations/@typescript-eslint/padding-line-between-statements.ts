import baseConfiguration, { optionsList as optionsListBase } from '../eslint/padding-line-between-statements'
import { StatementType as StatementTypeBase } from '../eslint/padding-line-between-statements.d'

import Configuration, { Options, StatementType } from './padding-line-between-statements.d'


const optionsList:Options = optionsListBase.map(
	({ blankLine, prev, next }) => ({
		blankLine,
		prev: fix(prev),
		next: fix(next),
	}),
)


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


const configuration:Configuration = {
	ruleId: `@typescript-eslint/padding-line-between-statements`,
	providerId: `@typescript-eslint/eslint-plugin`,
	base: baseConfiguration,
	options: [
		...optionsList,

		...padAround([`type`, `interface`]),
		...ignoreSame(`type`),

		...ignoreSame(`function`),
	],
}

export default configuration

//

function fix (value:StatementTypeBase):StatementType {
	if (typeof value === `string`) return fixSingle(value)

	return value.map(fixSingle)
}

type Single<T> = T extends Array<unknown> ? never : T

function fixSingle (value:Single<StatementTypeBase>):(Single<StatementType>) {
	if (value === `cjs-export`) return `exports`
	if (value === `cjs-import`) return `require`

	return value
}
