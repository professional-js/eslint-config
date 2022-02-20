const data = { }

(() => {
	let n = 0
	data.increment = () => ++n
})();

(() => {
	let n = 0
	data.decrement = () => --n
})()

function tryMe (what) {
	if (what === 'what') return 1
	if (what === 'tahw') return -1

	if (typeof what === 'string')
	return what.length * 10

	return typeof what
}


export type EarlyTypeDefinition = StringOrNumber | boolean

export const earlyTypeAnnotation: StringOrNumber = 17

type StringOrNumber = string | number

export const PossiblyEarlyUse = (): Enum => Enum.enum
export const InnocuousDangerousEarlyUse = PossiblyEarlyUse()

enum Enum {
	enum = `true`,
}
