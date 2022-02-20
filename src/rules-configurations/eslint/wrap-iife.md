[wrap-iife](https://eslint.org/docs/rules/wrap-iife)
====================================================
Invoking an unwrapped function expression will often go unnoticed. Wrapping the function expression makes the reader note that something is happening. And since wrapping a function expression is otherwise useless, this makes for a simple but effective pattern of usage that will help you and others maintain your code with more confidence.

The pitfall and its resolution are the same irrespective of how the function expression is ivoked, so `(IIFE)()`, `(IIFE).call()`, and `(IIFE).apply()` are handled the same.
