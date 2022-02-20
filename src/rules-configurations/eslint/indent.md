[indent](https://eslint.org/docs/rules/indent)
==============================================
The reason for going with tabs is that they are the more appropriate representation of intent. For a detailed explanation, see [Tabs versus Spaces](indent.tabs-vs-spaces.md).


The one simple rule
-------------------
What is between paired tokens is indented one level more than the token, everything else keeps indentation level.

Paired tokens are:
+ parentheses `(`…`)`
+ brackets `[`…`]`
+ braces `{`…`}`
+ angles `<`…`>`
+ JSX tags `<tag>`…`</tag>`
+ JSX tag delimiters `<`…`/>`
+ JSX comment delimiters `<!--`…`-->`
+ block comment delimiters `/*`…`*/` *(unless using [documentation comments](https://jsdoc.app/about-getting-started.html))*

The option settings follow a rather simple strategy: subordinate things are indented one level deeper than their respective “containers”, items at the same structural level are aligned. When in doubt, prefer indentation.


Indentation versus Alignment
----------------------------
Alignment at the start of a line is not worth the effort.

To see why that is, an example may be helpful. Let's use the following array assignment:
```js
const arrayOfAwesomeAncestors = [ Andrew, Agnes, Aramir, Agatha, Aesir ]
```

That one should be spread to multiple lines. There are three basic strategies for that: break, align, indent.

+	**Single break**
	```js
	const arrayOfAwesomeAncestors = [
		Andrew, Agnes, Aramir, Agatha, Aesir
	]
	```
+	**Align with first**
	```js
	const arrayOfAwesomeAncestors = [ Andrew,
	                                  Agnes,
	                                  Aramir,
	                                  Agatha,
	                                  Aesir ]
	```
	```js
	const arrayOfAwesomeAncestors = [ Andrew,
	                                  Agnes,
	                                  Aramir,
	                                  Agatha,
	                                  Aesir,
	]
	```
+	**Align with name**
	```js
	const arrayOfAwesomeAncestors = [
	      Andrew,
	      Agnes,
	      Aramir,
	      Agatha,
	      Aesir,
	]
	```
+	**Indent**
	```js
	const arrayOfAwesomeAncestors = [
		Andrew,
		Agnes,
		Aramir,
		Agatha,
		Aesir,
	]
	```

For some shorter argument lists, `Single break` may work aesthetically, but it still has the issue of clotting together the items and the array name. And with any longer list, it's almost as bad as the one-liner. Therefore, it's off the table.

The `Align` and `Indent` strategies spread the items over multiple lines and thus help distinguishing the items.

The `Align with first` strategies create large distances between tokens and thus break cohesion. The first variant distances itself far from the next line, much further than is usually warranted by what happens in the code. The second variant breaks within itself and makes it hard to handle the whole expression as a single block.

Neither `Align with name` nor `Indent` suffer from those issues. Both have merit, and are each far superior to the other strategies. Of the two, `Align with name` is more visually coherent, while `Indent` is the more semantically correct since the items in an array are subordinate to the array itself. That makes `Indent` a close preference over `Align with name`. Additionally, `eslint` presently lacks support for `Align with name`, so the point is moot.


Exceptions and special cases
----------------------------
In short, there are none. But let's examine some points that may seem like valid exceptions.


### Member Expression
The result of a member expression is at the same level as its containing object. That may seem counter-intuitive, so compare these two examples:
```js
const key = value
```
```js
const key = value.member
```
As can be seen in these examples, both `value` and `value.member` are assigned at the level of `key`. That makes them structurally equal. Many people will argument that `member` is subordinate to `value`, so that the member expression should be indented. Thought through, this would have to lead to this:
```js
const key = value
	.member
		.submember
```
The reasoning here should be obvious: if `.member` is subordinate to `value` and should therefore be indented, then by the same logic, `.submember` is subordinate to `.member` and should therefore be indented further.

In any case, indenting member expressions leads to overindentation such that the next non-member line will cause a stumble when scanning through the code. That costs time and attention with no redeeming value.


### ternaries, and other operators
The same reasoning applies here as for member expressions. Unfortunately, the rule cannot presently be configured such that ternaries can be handled according to the rules put forth here.

Also, [as of mid-2020, that's not going to change](https://eslint.org/blog/2020/05/changes-to-rules-policies).


### IIFE-Body
An IIFE is a function, and should be treated accordingly. The times of huge pseudo modules are over, so the pattern of not indenting the function body on account of its size and logical module-root level can be considered obsolete.
