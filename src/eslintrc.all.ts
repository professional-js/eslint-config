import makeEslintrc from './eslintrc.make'
import { HELPFUL, IMPORTANT, TASTE } from './priorities'

export default makeEslintrc(IMPORTANT, HELPFUL, TASTE)
