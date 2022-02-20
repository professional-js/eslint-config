import config from '@professional-js/eslint-config'
import eslint from 'eslint'
import src from './src'
import './package.json'
import '/absolute/package.json'
import outdent from 'outdent'
import rimraf from 'rimraf'
export * from './src/index'
export * from './package.json'
export * from './src'
export * from '../important/src'


import x from './src/index'
import xx from './src/index.js'
import y from '../src'
import z from '../imports/src'
import zz from '../imports/src/index'


export default {
	rimraf,
	config,
	eslint,
	outdent,
}

import('rimraf')
.then(rimraf => rimraf)
.catch(reason => reason)
