import { outputFile } from 'fs-extra'
import { outdent } from 'outdent'

import { canRequire } from './canRequire'
import { importable, src, support } from './paths'
import { providers } from './providers'

const exportsList = providers.map((p) => `'${p.id}': ${canRequire.name}('${p.id}') && '${p.name}',`)
const providersFile = src(`.providers.ts`)

void outputFile(
	providersFile,
	outdent`
		import { ${canRequire.name} } from '${
			importable(support(`canRequire`), providersFile)
		}'

		export const providers = {
			${ exportsList.join(`\n\t`) }
		} as const
	`,
)
