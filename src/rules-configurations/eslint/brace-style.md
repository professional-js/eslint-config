[brace-style](https://eslint.org/docs/rules/brace-style)
========================================================
See [curly](curly.md) for why you should always use braces, this is about how to set them.

`1tbs` has the advantage of clearly linking `if` and `else`, as well as `if`/`else` with their respective bodies.

Let's put them side by side:
```js
if (_1tbs_) {
  then()
} else {
  otherwise()
}

if (stroustrup) {
  then()
}
else {
  otherwise()
}

if (allman)
{
  then()
}
else
{
  otherwise()
}
```

Consider this (fully valid and functional) code, note the function name `it`:
```js
it(allman)
{
	then()
}
```
That looks a lot like an if clause and can be easily confused with one. That won't happen with `1tbs` or `stroustrup` because this raises a `SyntaxError`:
```js
it(_1tbs_|stroustrup) {
	then()
}
```

With `stroustrup`, the `else` clause looks independent from the `if` clause, but that is false: if you remove the `if` clause, you cannot keep the `else` clause.

Consequently, `1tbs` is correctly named: it is objectively superior to the other two in terms of maintainability.

## `allowSingleLine`
Braces don't help understanding on a single line, they hamper it because they add noise.

Also, generally, there should be no single-line `if`s. See [curly (Pro Tip)](curly.md#pro-tip) for the one exception.
