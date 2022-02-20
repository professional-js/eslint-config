import { dirname, relative, resolve } from 'path'

export const trimTs = (fp:string) => fp.replace(/\.ts$/g, ``)

export type PathBuilder = (...s:Array<string>) => string

export const root:PathBuilder = (...s) => resolve(__dirname, `..`, ...s)
export const src:PathBuilder = (...s) => root(`src`, ...s)
export const support:PathBuilder = (...s) => root(`support`, ...s)
export const transpiled:PathBuilder = (...s) => root(`.transpiled`, `src`, ...s)

export const rulesDefinitions:PathBuilder = (...s) => support(`.rules-definitions`, ...s)
export const rulesConfigurations:PathBuilder = (...s) => src(`rules-configurations`, ...s)

export function importable (source:string, target:string) {
	return trimTs(
		relative(dirname(target), source)
		.replace(/\\/g, `/`)
		.replace(/^/, `./`)
		.replace(/^\.\/\./, `.`),
	)
}
