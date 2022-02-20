[no-octal](https://eslint.org/docs/rules/no-octal)
==================================================
> Because the leading zero which identifies an octal literal has been a source of confusion and error in JavaScript code,
> ECMAScript 5 deprecates the use of octal numeric literals.

— [The eslint docs](https://eslint.org/docs/rules/no-octal)


> a strict mode in ECMAScript 5 forbids a 0-prefixed octal literal or octal escape sequence
> …
> In ECMAScript 2015, octal literals are supported by prefixing a number with "0o"; for example:
> ```js
> var a = 0o10; // ES2015: Octal
> ```
> Novice developers sometimes believe a leading zero prefix has no semantic meaning,
> so they might use it as an alignment device — but this changes the number's meaning!
> A leading zero syntax for the octal is rarely useful and can be mistakenly used, so strict mode makes it a syntax error:
> ```js
> 'use strict';
> var sum = 015 + // !!! syntax error
>           197 +
>           142;
>
> var sumWithOctal = 0o10 + 8;
> console.log(sumWithOctal); // 16
> ```

— [MDN about Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors)

See also [the MDN page about the related SyntaxError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_octal)
