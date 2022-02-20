[comma-style](https://eslint.org/docs/rules/comma-style)
========================================================
The pros and cons for comma-first vs comma-last are well described [by Isaac Z. Schlueter](https://gist.github.com/isaacs/357981) and [Outsharked](http://blog.outsharked.com/2012/05/on-javascript-style.html).

In the end, comma-last wins because of the following points.

## Comma-dangle only works with comma-last, not comma-first
That really says it all. For why comma-dangle is useful, see [there](./comma-dangle.md).

## Array and Object literals benefit little from commas
> I want punctuation to disappear when it's not doing something important.

— [Outsharked](http://blog.outsharked.com/2012/05/on-javascript-style.html)

While commas are made very important by the syntax, the language could remove them for the most part, and without ambiguity. Compare these to see that point:
```ts
const object = {
	x: 1,
	y: 2,
	z: 3,
}
```
```ts
const object = {
	x: 1
	y: 2
	z: 3
}
```
Of course, there will be edge cases that would still require something. And the language is not going to change in this regard. The point here is that the commas don't actually help in understanding what is happening here and therefore do not justify a prominent position.

Yes, this means that missing commas will be less obvious. But: the fact of the matter is that missing comma errors are made so rare by tool support that they do not outweigh their focus impact here.

Isaac's counter-argument was geared towards variable declarations, and those are different from array and object literals. They cannot comma-dangle because the commas there basically replace additional `var`/`let`/`const` keywords. In an array/object literal, they delimit items within a structure that is bounded by other tokens. In variable declarations, comma-first's advantages outweigh the disadvantages due to these factors.

----

See also [comma-spacing](./comma-spacing.md)
