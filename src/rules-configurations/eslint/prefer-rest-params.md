[prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params)
======================================================================
Magic variables are dangerous. Consider this:
```js
const arguments = [ 1, 2, 3 ]
function go() {
	return arguments
}
```

The intention is most likely for `go` to return `[ 1, 2, 3 ]`. However, due to the magic `arguments` variable, that doesn't work. `arguments` being an anti-feature, it should not be used.
