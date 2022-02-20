[space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)
========================================================================================
Combined with [func-call-spacing](./func-call-spacing.md), this helps distinguish at a glance between function declarations/expressions and function calls:
```js
const functionExpression = function (...arguments) {
	// ...
}

const foo = {
	bar () {
		// ...
	}
}
///
const functionCallResult = funotion(...arguments)(
	// ...
)

if (condition) {
	doSomething()
	// ...
}
```

Related to [keyword-spacing](./keyword-spacing.md).
