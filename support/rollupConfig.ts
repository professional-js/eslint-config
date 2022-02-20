import { nodeResolve } from '@rollup/plugin-node-resolve'
import { readJsonSync } from 'fs-extra'

import { root, transpiled } from './paths'

const rc = (suffix:string) => `eslintrc.${suffix}.js`

const make = `make`

const eslintrc = (suffix:string) => ({
	input: transpiled(rc(suffix)),
	output: {
		file: root(rc(suffix)),
		format: `cjs`,
		exports: `default`,
		preferConst: true,
	},
	external: [
		suffix === make ? null : transpiled(rc(make)),
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
		...Object.keys(readJsonSync(root(`package.json`)).peerDependencies),
	],
	plugins: [
		nodeResolve(),
	],
})

export default [
	eslintrc(`all.dangerzone`),
	eslintrc(`all`),
	eslintrc(`default`),
	eslintrc(`important`),
	eslintrc(make),
]
