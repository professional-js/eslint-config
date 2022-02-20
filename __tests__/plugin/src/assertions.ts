type Foo = 3

// bad
const foox: Foo = 3 as 3
// bad
const fooy = 3 as Foo
// bad ‑ probably a different rule since this is an annotation, not an assertion
const fooz: Foo = 3

// bad
const fooa = <3>3
// bad
const foob = <Foo>3

// good
const fooc = 3
// bad
const bar = fooc!

function foo (x: number): number {
	// bad
	return x!
}

// good
const foon = <number>3

// good
const foom = 3 as number

// bad
const fool = 'foo' as const

function fook(x: number | undefined): number {
	// good
	return x!
}

// bad
const foos = fook(3) as number

// good
let vy = 1 as 1
// bad
const cy = 1 as 1

const cx = 1
// bad
let z0 = cx as number
// bad, nice to check but not necessary
let z1 = cx as const
// good
let z2 = cx as 1
