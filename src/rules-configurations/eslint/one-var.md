[one-var](https://eslint.org/docs/rules/one-var)
================================================
> The single-declaration school of thought is based in pre-ECMAScript 6 behaviors, where there was no such thing as block scope, only function scope. Since all var statements are hoisted to the top of the function anyway, some believe that declaring all variables in a single declaration at the top of the function removes confusion around scoping rules.

— [The eslint docs](https://eslint.org/docs/rules/one-var)

Since we are now in the era of ES2021 and TypeScript, aligning our rules to that makes sense. Aligning to ES5 limitations, however, makes no sense because if such code is even required at all, a transpiler will do a much better job of ensuring compliance than a human.

So, what makes sense in ES2021 and TypeScript, then? Firstly `let` and `const` instead of `var`. Based on that, we will have co-location of variable declarations and first use, so those declarations will be sprinkled all over the place. That gives the `const`/`let` keywords additional importance as markers for where declarations happen.

Co-location also means, there will be very few consecutive blocks of declarations, and those will be short. With those, the combination of multiple declarations into a single statement by way of commas adds little benefit but may introduce unnecessary overhead. Consider this:
```ts
const dbAuthToken = authenticateAtDb(magic)
const specialData = getData(dbAuthToken, 'special')
```
```ts
const
	dbAuthToken = authenticateAtDb(magic),
	specialData = getData(dbAuthToken, 'special')
```
Now, if you want to do something in between those two declarations, the first version will be much simpler to work with, and both have the same result:
```ts
const dbAuthToken = authenticateAtDb(magic)
validateAuthToken(dbAuthToken)
const specialData = getData(dbAuthToken, 'special')
```

Therefore, separate declarations are overall more beneficial to everyday work that bundled ones.
