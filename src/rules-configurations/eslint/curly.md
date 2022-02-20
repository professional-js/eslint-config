[curly](https://eslint.org/docs/rules/curly)
============================================
Let's say you start a conditional without parentheses:
```js
if (condition)
action()
```

Now, when scanning over this, you may not realize that `action()` is dependent on `condition`. If you indent `action()` to enable this, you run into the problem of overindentation:
```js
if (condition)
	action()

laterStuff()
```

Some may prefer that because there actually is something going on, some may not care either way and/or not notice any difference. At this point, it might be considered a matter of taste. However, now let's see what happens when we add another statement to this.
```js
if (condition)
	action()
	nextAction()

laterStuff()
```
This is where it gets dangerous. If you are accustomed to free-floating indentation, this will look fine but it will be an error because `nextAction` is executed unconditionally even though it looks like it's part of `action`'s conditional execution. Since JavaScript does not care for whitespace, for multiple statements, braces are required:
```js
if (condition) {
	action()
	nextAction()
}

laterStuff()
```

By always adding braces, you guard yourself against this problem. When changing the conditional behavior here, you need not add the braces and will therefore keep focus on your actual task instead of dealing with this kind of syntactic nit-picking.

## 💡 Pro Tip
> ⚠ `dangerzone`

There is one **narrow** use case for skipping the braces. Before adding that, you should have the basic strategy (always add braces) down before attempting this addition.

That use case is *exit conditions*:
```js
function doStuff (data) {
	if (!data) return null
	if (Array.isArray(data)) return data.length
	if (data.bad) return fix(data)

	if (conditionRed(data)) {
		return (
			conditionBlack(data)
			? blackOps(data)
			: redAlert(data)
		)
	}

	return normalize(data)
}
```

These exit conditions have a specific form: `if (condition) return value`. Skip the braces **only when you can comfortably** fit your code into this specific pattern:
+ If you have multiple conditions, use braces
+ If the return value requires even slighty complex handling, use braces
+ If you do anything other than return, use braces
+ If you are unsure, use braces

### Why is this considered `dangerous`?
In order to not overuse or abuse the configuration that enables this use case, you need to apply discretion. Specifically, there is nothing technically preventing you from doing either of these:
```js
if (condition1 && condition2 || condition3 && condition4) return condition5 ? data : false
if (condition1 && condition2 || condition3 && condition4) condition5 ? action(data) : action(false)
```
While you *can* do that, you *should not*. That kind of thing is very hard to read and therefore very hard to maintain. Rather do something like this:
```js
if (
	(condition1 && condition2)
	||
	(condition3 && condition4)
) {
	if (condition5) return data

	return false
}

if (
	(condition1 && condition2)
	||
	(condition3 && condition4)
) {
	if (condition5) {
		action(data)
	} else {
		action(false)
	}
}
```

**Note:** The `return` variant has no else clause. That is intentional: you should never use an `else` clause after a `return`, because that obscures the `return`. Instead do as shown here and add an empty line before the next section.
