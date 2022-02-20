import config from '@professional-js/eslint-config'
import ava from 'ava'
import eslint from 'eslint'
import outdent from 'outdent'

export default {
	ava,
	config,
	eslint,
	outdent,
}

import(`ava`)
.then((ava) => ava)
.catch((reason) => reason)
