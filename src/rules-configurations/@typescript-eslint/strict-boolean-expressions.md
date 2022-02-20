[@typescript-eslint/strict-boolean-expressions](https://typescript-eslint.io/rules/strict-boolean-expressions)
==============================================================================================================
By preventing the mistake of conflating nullish values with other falsy values, this rule promotes clarity of intention and reduces sources of bugs.

A prime example of this mistake is checking for an optional argument:
```ts
function foo(arg?: string|number|boolean) {
	if (arg) {
		bar()
	}
}
```
In such a case, the intention is usually to act based on whether or not a value was supplied. However, this conflates the nullish `undefined` with the other falsies `""`, `0`, `false`. This can lead to bugs that don't show up during happy-path testing but can break applications in random-seeming cases.

Compare to this:
```ts
function foo(arg?: string|number|boolean) {
	if (arg === undefined || arg === 0) {
		bar()
	}

	if (typeof arg === `string`) {
		baz(arg)
	}

	moob(arg)
}
```
Now, the code's intention is clear: `undefined` and `0` are supposed to result in the same outcome, but `""` is not, and `false` triggers no special behavior.

----

See [Option `allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing`](./_strictNullChecks.md)
