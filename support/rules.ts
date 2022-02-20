import { pathExistsSync } from 'fs-extra'

import rawRules from './.rules-definitions'
import { rulesConfigurations, rulesDefinitions } from './paths'
import { eslint, providers } from './providers'
import { RuleData, RuleDefinition } from './Rule.d'

type RuleDataRaw = Omit<RuleData, 'exists' | 'complete'>

const allRules = rawRules.map(ruleData)

let rulesCurrent:Array<RuleData> = []

export function rules () {
	rulesCurrent = allRules.map(ruleStatus)

	return rulesCurrent
}

function ruleData (rule:RuleDefinition) : RuleDataRaw {
	const provider = providers.find(({ id }) => id === rule.providerId)

	if (!provider) throw new Error(`No provider found for rule ${rule.id}`)

	const configFile = rulesConfigurations(provider.name, `${rule.key}.ts`)
	const typingFile = rulesConfigurations(provider.name, `${rule.key}.d.ts`)
	const reasonFile = rulesConfigurations(provider.name, `${rule.key}.md`)
	const definitionFile = rulesDefinitions(provider.name, `${rule.key}.ts`)

	return {
		rule,
		provider,
		configFile,
		typingFile,
		reasonFile,
		definitionFile,
	}
}

function ruleStatus (data:RuleDataRaw) : RuleData {
	const existence = [
		pathExistsSync(data.configFile),
		pathExistsSync(data.typingFile),
		pathExistsSync(data.reasonFile),
	]

	return {
		...data,
		exists: existence.some((exists)=>exists),
		complete: existence.every((exists)=>exists),
	}
}

export function ruleToBundle (data:RuleData) {
	const all = rulesCurrent.filter((x) => {
		if (x.rule.key === data.rule.key) return true

		if (typeof data.rule.meta.docs?.extendsBaseRule === `string`) {
			if (x.rule.id === data.rule.meta.docs.extendsBaseRule) return true
		}

		if (typeof x.rule.meta.docs?.extendsBaseRule === `string`) {
			if (x.rule.meta.docs.extendsBaseRule === data.rule.id) return true
		}

		return false
	})

	const base = all.find(({ provider }) => provider === eslint) ?? data

	return {
		all,
		base,
		extend: all.filter((d) => d !== base),
	}
}
