[sort-keys](https://eslint.org/docs/rules/sort-keys)
====================================================
The way it works now, this rule produces too many errors for most projects, because there are often implicit hierarchies in objects, that developers reflect in the sort order of object keys.

This is a typical example:
```js
const someUser = {
	id: 'user42',
	avatar: Avatar23,
	quote: 'All your base are belong to us',
	quoteAttribution: 'Zero Wing 1989',
	quoteUrl: 'https://en.wikipedia.org/wiki/All_your_base_are_belong_to_us',
}
```
Here, `id` is the most important key, and therefore it is listed first. Forcing `id` to be listed in the middle, would deteriorate comprehension.

Additionally, not being fixable can really make this one hurt.

Therefore, this rule is better disabled.

----

If the rule could be configured to allow keys to be arranged in blocks to be sorted individually, the recommendation would change to that scenario, with the above example being valid when structured like this:
```js
const someUser = {
	id: 'user42',

	avatar: Avatar23,
	quote: 'All your base are belong to us',
	quoteAttribution: 'Zero Wing 1989',
	quoteUrl: 'https://en.wikipedia.org/wiki/All_your_base_are_belong_to_us',
}
```
