[no-return-assign](https://eslint.org/docs/rules/no-return-assign)
==================================================================
A return statement should only return and not have any side effects.

Compare these:
```js
const rollingSum = 0
function addToSum (addend) {
	⋮
	return rollingSum += addend
}
```
```js
const rollingSum = 0
function addToSum (addend) {
	⋮
	rollingSum += addend

	return rollingSum
}
```

When scanning over this code, while more verbose, the second one has the distinct advantage of making immediately clear that `rollingSum` will be returned.

The first is easy to figure out, but it does take figuring out. And that in and of itself wastes developer time.
In contrast, these additional 14 keystrokes (max!) will pay off in reading speed several times over any non-trivial code's life span.
