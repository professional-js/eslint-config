import config from '@professional-js/eslint-config'
import eslint from 'eslint'
import outdent from 'outdent'
import rimraf from 'rimraf'

import src from './src'

import './package.json'
import '/absolute/package.json'

export * from '../important/src'
export * from './package.json'
export * from './src'
export * from './src/index'


import z from '../imports/src'
import zz from '../imports/src/index'
import y from '../src'

import x from './src/index'
import xx from './src/index.js'


export default {
	rimraf,
	config,
	eslint,
	outdent,
}

import(`rimraf`)
.then((rimraf) => rimraf)
.catch((reason) => reason)
