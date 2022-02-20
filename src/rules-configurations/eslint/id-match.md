[id-match](https://eslint.org/docs/rules/id-match)
==================================================
**TLDR:** it's just usually not worth enforcing this on lint level.

Generally, variables and properties should be camelCase or PascalCase. But elision variables like `_` should be allowed as well. Numbers are sometimes useful as well. And don't forget those good old ALL_CAPS_CONSTANTS! Now you have a RegEx like this:
```regexp
^(?:__?|[a-z][0-9]*|([A-Z]?[a-z]+)+[0-9]*|[A-Z]+(_[A-Z]+)+)$
```
While that's a rather practical constraint, there are often some exceptions that just don't fit. Additionally, most projects do that anyway, and consequently don't profit from this rule.

> “There are only two hard things in Computer Science: cache invalidation and naming things.”
> — Phil Karlton

Also, with that👆 quote from [the rule page](https://eslint.org/docs/rules/id-match) in mind, the main issue with naming is usually not a technical issue, but one in regard to meaning: the matter of whether to write `someVariable` or `some_variable` is usually ease to resolve, less so whether to write `buttonBig` or `bigButton` (word order), even less which of `buttonBig`, `buttonPrimary`, or `callToAction` (descriptiveness). The latter, interesting ones are impractical to enforce with just a regular expression.
