[prefer-spread](https://eslint.org/docs/rules/prefer-spread)
============================================================
`Function.prototype.apply` is more verbose than spreading, and for cases that do not require it, they put an unnecessary cognitive burden on the developer. On the other hand, allowing `Function.prototype.apply` only when necessary actually enhances understanding in that the developer can now use the presence of it as an indication that `this` is changed, which can have severe implications. Consequently, this rule is doubly useful.
