import inquirer from 'inquirer'

import { BACK, DONE, random, randomIncomplete, randomNew, scoped, scopedNew, select, selectNew } from './edit-config.strategies'


void inquirer.prompt([
	{
		type: `list`,
		name: `strategy`,
		message: `Strategy:`,
		choices: [
			{
				name: `random, new`,
				value: randomNew,
			},
			{
				name: `random, incomplete`,
				value: randomIncomplete,
			},
			{
				name: `random, all`,
				value: random,
			},
			{
				name: `scoped, new`,
				value: scopedNew,
			},
			{
				name: `scoped, all`,
				value: scoped,
			},
			{
				name: `select, new`,
				value: selectNew,
			},
			{
				name: `select, all`,
				value: select,
			},
		],
	},
])
.then(({ strategy }:{ strategy:() => Promise<never>}) => proceed(strategy))


function proceed (strategy:() => Promise<never>) : Promise<boolean> {
	return (
		strategy()
		.then(() => (
			inquirer.prompt([
				{
					type: `confirm`,
					name: `next`,
					message: `Next?`,
					default: true,
				},
			])
		))
		.then(({ next }:{ next:boolean }) => (
			next && proceed(strategy)
		))
		.catch((error) => {
			if (error === BACK) return proceed(strategy)
			if (error === DONE) return true

			return Promise.reject(error)
		})
	)
}
