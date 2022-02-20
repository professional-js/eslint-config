const data = { }

(() => {
	let n = 0

	data.increment = () => ++n
})()

;(() => {
	let n = 0

	data.decrement = () => --n
})()

function tryMe (what) {
	if (what === 'what') {return 1}
	if (what === 'tahw') {return -1}

	if (typeof what === 'string')
	{return what.length * 10}

	return typeof what
}
