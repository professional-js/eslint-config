import { pathExistsSync } from 'fs-extra'

import { generateDoc } from './edit-config.processing'
import { rules, ruleToBundle } from './rules'

rules()
.filter((rule) => rule.exists)
.filter((rule) => !pathExistsSync(rule.reasonFile))
.forEach((rule) => void generateDoc(rule, ruleToBundle(rule)))
