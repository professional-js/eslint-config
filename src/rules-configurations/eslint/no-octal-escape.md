[no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)
================================================================
> As of the ECMAScript 5 specification, octal escape sequences in string literals are deprecated and should not be used.
> Unicode escape sequences should be used instead.

— [The eslint docs](https://eslint.org/docs/rules/no-octal-escape)


> Octal escape sequences, such as "\45", which is equal to "%",
> can be used to represent characters by extended-ASCII character code numbers in octal.
> In strict mode, this is a syntax error.

— [MDN about Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors)

See also [the MDN page about the related SyntaxError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_octal)
