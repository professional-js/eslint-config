type Foo = 3

// bad
const foox: Foo = 3 as const
// bad
const fooy = 3 as Foo
// bad ‑ probably a different rule since this is an annotation, not an assertion
const fooz: Foo = 3

// bad
const fooa = <const>3
// bad
const foob = <Foo>3

// good
const fooc = 3
// bad
const bar = fooc

function foo (x: number): number {
	// bad
	return x
}

// good
const foon = <number>3

// good
const foom = 3 as number

// bad
const fool = `foo` as const

function fook (x: number | undefined): number {
	// good
	return x!
}

// bad
const foos = fook(3)

// good
const vy = 1 as const
// bad
const cy = 1 as const

const cx = 1

// bad
const z0 = cx as number
// bad, nice to check but not necessary
const z1 = cx as const
// good
const z2 = cx as 1
