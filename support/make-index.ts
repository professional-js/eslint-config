import { camelCase } from 'case-anything'
import { Dirent, outputFile, pathExistsSync, readdir } from 'fs-extra'
import { outdent } from 'outdent'

import { PathBuilder, rulesConfigurations, rulesDefinitions, trimTs } from './paths'


const roots = {
	rulesDefinitions,
	rulesConfigurations,
}

const firstArgAfterExeAndScript = 2
const root = process.argv[firstArgAfterExeAndScript] as keyof typeof roots

buildIndices(roots[root])
.catch((error) => {
	console.error(error)
})

function buildIndices (scope:PathBuilder, ...directory:Array<string>): ReturnType<typeof buildIndex> {
	return readdir(scope(...directory), { withFileTypes: true })
	.then((entries) => Promise.all(
		entries
		.filter((entry) => entry.isDirectory())
		.map((entry) => buildIndices(scope, ...directory, entry.name)),
	))
	.then(() => buildIndex(scope, ...directory))
}

const indexName = `index.ts`

function buildIndex (scope:PathBuilder, ...directory:Array<string>) {
	return readdir(scope(...directory), { withFileTypes: true })
	.then((entries) => entries.filter((entry) => entry.name !== indexName))
	.then((entries) => [
		entries.filter((entry) => entry.isDirectory() && pathExistsSync(scope(...directory, entry.name, indexName))),
		entries.filter((entry) => entry.isFile() && entry.name.endsWith(`.ts`) && !entry.name.endsWith(`.d.ts`)),
	] as const)
	.then(([directories, files]) => ([
		[
			...directories.map(importStatement(dirName)),
			...files.map(importStatement(fileName)),
		],
		[
			...directories.map((entry) => `...${dirName(entry)}`),
			...files.map((entry) => fileName(entry)),
		],
	] as const))
	.then(([importsList, exportsList]) => outputFile(
		scope(...directory, indexName),
		outdent`
			${
				importsList.join(`\n`)
			}

			export default [
				${
					exportsList.join(`,\n\t`)
				},
			]\n
		`,
	))
}

function importStatement (varName: (entry: Dirent) => string) {
	return (entry:Dirent) =>`import ${varName(entry)} from './${clippedName(entry)}'`
}

function dirName (entry:Dirent) {
	return `__${camelCase(clippedName(entry))}__`
}

function fileName (entry:Dirent) {
	return `_${camelCase(clippedName(entry))}_`
}

function clippedName (entry:Dirent) {
	return trimTs(entry.name)
}
