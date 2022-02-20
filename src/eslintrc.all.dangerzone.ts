import makeEslintrc from './eslintrc.make'
import { HELPFUL, IMPORTANT, TASTE } from './priorities'

export default makeEslintrc({
	priorities: [ IMPORTANT, HELPFUL, TASTE ],
	dangerzone: true,
})
