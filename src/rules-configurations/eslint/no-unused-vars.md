[no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)
==============================================================
> Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring.
> Such variables take up space in the code and can lead to confusion by readers.

— [The eslint docs](https://eslint.org/docs/rules/no-unused-vars)

Given that 👆, unused vars really need to be avoided wherever possible.
Sometimes, however, you'll be writing a callback and need to adhere to a given interface.
In those cases, sometimes changing the callback's recipient is not an option, so you have to skip arguments.

Adding that as a language feature to JavaScript and/or TypeScript has been discussed before and will not happen any time soon:
+ https://github.com/Microsoft/TypeScript/issues/9458
+ https://esdiscuss.org/topic/uninteresting-parameters

## So, what to do?

One way would be going strict and still disallowing skips, but that would really harm those edge cases.

Another would be to enable e.g. `_` using `argsIgnorePattern`, but
[that would open up unintentional misses](https://github.com/Microsoft/TypeScript/issues/9458#issuecomment-234230702).

Finally, ignoring preceding arguments will allow skipping arguments but still require the last ones to be used.
It's not perfect but seems to be the least bad option.
Apart from adding argument skipping as a language feature,
the next-best thing would be to apply `argsIgnorePattern` (or a similar white-list) to the preceding variables only.
While that would be nice, I won't hold my breath because the chances of that happening are slim.
