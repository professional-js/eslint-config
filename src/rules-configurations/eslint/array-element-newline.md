[array-element-newline](https://eslint.org/docs/rules/array-element-newline)
============================================================================
As a general rule, arrays should be multiline beyond two or three items because they become too difficult to grasp at a glance. However, there are cases when 4 or 5 items will be preferable to have on a single line, or a single item may be some big or important, that the array should be multiline. Therefore, a hard and fast rule seems to be impractical.

Even `'consistent'` may be too restrictive, because it disallows this useful pattern:
```ts
spawn(
	'some-cli-tool',
	[
		'-s', './src',
		'-d', './dist',
		'-f',
		...more,
	],
)
```
Here, some items are more closely related than others, and their order is important among themselves but not regarding the others. This style helps comprehension and avoids inoccuous errors due to sorting the lines.
