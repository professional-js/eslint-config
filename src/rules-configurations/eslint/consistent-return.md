[consistent-return](https://eslint.org/docs/rules/consistent-return)
====================================================================
When calling a function, the caller will either care about the return value or not. There is no in-between. They may discard the value if it is `undefined`, but that is a decision based on the value.

If a function is ambivalent on whether it returns a value or not, that can mean an oversight, in which case this rule prevents a mistake from going forward.

If that behavior is intentional, however, the design should actually be questioned. If the caller can request the variant to use by giving specific inputs, the function should be split into two (or more) functions and require the caller to decide which function to call. That makes for far more maintainable code. If the caller cannot know in advance what will happen, they then need to determine that after the fact, based on what was returned and possibly on some state the function changed. That then means bad encapsulation.

This evaluation could be extended even more, but it shall be enough here for illustrating the point that ambivalent functions are either mistakes or bad design, both of which should be considered unaccptable.
