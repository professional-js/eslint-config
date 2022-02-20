[semi](https://eslint.org/docs/rules/semi)
==========================================
On the surface, the matter of semicolons looks like a matter of taste. Additionally, many proponents of using semicolons to terminate statements claim this practice to guard against hazards of ASI (automatic smeicolon insertion).

Unfortunately, semicolons only help in very specific cases, and consequently generate a false sense of safety. This can best be illustrated with a simple example.

Consider this code:
```js
function stuff (arg) {
	return
		arg
	;
}
```

Most developers, even with years or decades of experience, will think that this function will return its first argument. In reality, however, it will return nothing. The reason lies in how JavaScript terminates statements. This alone necessitates any and every developer to learn how JavaScript is parsed in order to avoid such pitfalls, even in the presence of manually inserted semicolons.

In light of that fact, eschewing all non-essential semicolons is an option without drawbacks. Additionally, adding unnecessary semicolons is actually harmful. Not to execution but to development.

Consider these functionally equivalent pieces of code:
```js
asyncAction()
.then(moreAction)
.then(furtherAction)
```
```js
asyncAction()
.then(moreAction)
.then(furtherAction);
```

If a developer wants to add another `.then`, a `.catch`, or a `.finally`, they will be encumbered by the additional semicolon:
```js
asyncAction()
.then(moreAction)
.then(furtherAction);
.catch(handleErrors)
```

If the developer is in a hurry, they may miss the semicolon and incur a SyntaxError, which will yield frustration and may in the worst case break the application. In the case of a late-night hotfix under time-pressure, that may result in user-facing breakage for no good reason.

While that is obviously an edge case, it is a reality in some companies, and nuisance everywhere else. The only developers who do not consciously feel that pain are those who are accustomed to it. The pain is there anyway.

In summary, manual semicolons are actually harmful and should only be employed where absolutely necessary. The rule that actually looks out for that is [no-unexpected-multiline](no-unexpected-multiline.md).

Also, see [semi-style](semi-style.md).

For additional detail (and less opinion – 😄 gotcha!), see [An Open Letter to JavaScript Leaders Regarding Semicolons, by Isaac Z. Schlueter](https://blog.izs.me/2010/12/an-open-letter-to-javascript-leaders-regarding)
