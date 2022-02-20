[quotes](https://eslint.org/docs/rules/quotes)
==============================================
The main thing here is to be consistent. Which style to use, however, has no obvious winner.

When selecting either single or double quotes, there's really no functional difference. I'm going with single mainly because that's what I've got used to over the years. The initial impetus was something along the lines of distinguishing HTML and JS. HTML got the double quotes because that was the most common convention. And it seems like a large portion of the community agrees, for whatever reason.

Now, backticks are another matter, and the decision here is somewhat difficult, but not arbitrary. That has to do with the simple fact that backticks do not signify string literals but template literals. While both [usually](https://mxstbr.blog/2016/11/styled-components-magic-explained/) result in strings, they are not the same thing. Template literals are clearly superior to string literals wherever they are valid. And that brings us to the main issue: they cannot be used everywhere string literals can be used.

The most prominent place you need string literals are `import` statements:
+ `import { Type } from 'typescript'` is valid
+ ``import { Type } from `typescript` `` is invalid

That would almost sway me away from backticks. But: if we consider import statements to be somewhat distinct from actual code, just like `'use strict'` (which also requires strings), then things get simpler, because for 99.9% of everyday use-cases, you can replace strings with template literals without drawbacks. One advantage, however, is that if the need arises to interpolate, all you have to do is add the interpolation, and that saves a little time. Another advantage is that you need not think about which quote to use, and that reduces cognitive load. So, in consequence, the benefits outweigh the drawbacks.

For a nice write-up detailing where template literals are invalid, see https://betterprogramming.pub/javascript-conventional-string-over-template-literals-3811daa6548e
