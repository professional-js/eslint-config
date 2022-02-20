import inquirer from 'inquirer'
import autocomplete from 'inquirer-autocomplete-prompt'

import { processRule } from './edit-config.processing'
import { EslintProvider, providers } from './providers'
import { RuleData } from './Rule.d'
import { rules, ruleToBundle } from './rules'

export const BACK = `👈 BACK`
export const DONE = `👉 DONE`

type RuleAnswer = RuleData | typeof BACK | typeof DONE

// autocomplete is missing types, see https://github.com/mokkabonna/inquirer-autocomplete-prompt/issues/107
inquirer.registerPrompt(`autocomplete`, autocomplete as inquirer.prompts.PromptConstructor)

export function select () {
	return selectProvider()
	.then(selectRule)
	.then(dispatch)
}

export function selectNew () {
	return selectProvider()
	.then(newRules)
	.then(selectRule)
	.then(dispatch)
}

export function scoped () {
	return selectProvider()
	.then(randomRule)
	.then(dispatch)
}

export function scopedNew () {
	return selectProvider()
	.then(newRules)
	.then(randomRule)
	.then(dispatch)
}

export function random () {
	return randomRule()
	.then(dispatch)
}

export function randomIncomplete () {
	return randomRule(incompleteRules(rules()))
	.then(dispatch)
}

export function randomNew () {
	return randomRule(newRules(rules()))
	.then(dispatch)
}


function selectProvider () {
	const providerAnswers = providers.map((provider) => ({
		name: provider.name,
		value: provider,
	}))

	return (
		inquirer.prompt([
			{
				type: `autocomplete`,
				name: `provider`,
				message: `Provider:`,
				source (_:never, input = ``) {
					if (!input) return providerAnswers

					return providerAnswers.filter(({ name }) => name.toLowerCase().includes(input.toLowerCase()))
				},
			},
		])
		.then(({provider}:{provider:EslintProvider}) => provider)
		.then(rulesForProvider)
	)
}

function selectRule (filteredRules:Array<RuleData>) {
	console.info(`Rules: ${filteredRules.length}`)

	const ruleAnswers = filteredRules
	.map((data) => ({
		name: `${
			data.rule.meta.docs?.recommended === undefined
			|| data.rule.meta.docs.recommended === false
			? `  `
			: `👍`
		} ${
			typeof data.rule.meta.fixable === `string`
			? `🛠 `
			: `  `
		} ${data.rule.key}`,
		value: data,
	}))

	return (
		inquirer.prompt([
			{
				type: `autocomplete`,
				name: `rule`,
				message: `Rule:`,
				source (_:never, input = ``) {
					return [
						BACK,
						...(
							input === ``
							? ruleAnswers
							: ruleAnswers.filter(({ name }) => name.toLowerCase().includes(input.toLowerCase()))
						),
						DONE,
					]
				},
			},
		])
		.then(({rule}:{rule:RuleAnswer}) => rule)
	)
}

async function randomRule (options = rules()) {
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	if (options.length === 0) return Promise.reject(`no more rules left`)

	console.info(`Rules: ${options.length}`)

	// assertion ensured by checking `options.length` and returning for 0
	return options[Math.floor(options.length * Math.random())] as RuleData
}


//


function incompleteRules (filteredRules:Array<RuleData>) {
	return filteredRules.filter(({ exists }) => exists).filter(({ complete }) => !complete)
}

function newRules (filteredRules:Array<RuleData>) {
	return filteredRules.filter(({ exists }) => !exists)
}

function rulesForProvider (provider:EslintProvider) {
	return rules().filter(({ provider: { id } }) => id === provider.id)
}


//


function dispatch (data:RuleAnswer) {
	if (data === BACK) return Promise.reject(BACK)
	if (data === DONE) return Promise.reject(DONE)

	return processRule(ruleToBundle(data))
}
