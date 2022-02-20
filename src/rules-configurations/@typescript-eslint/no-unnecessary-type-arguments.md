[@typescript-eslint/no-unnecessary-type-arguments](https://typescript-eslint.io/rules/no-unnecessary-type-arguments)
====================================================================================================================
Setting type parameters to their defaults may make sense for documentational reasons.
Based on context, it can help to see immediately which subtype is used, without having to look at the default, and to signal intention:
```ts
type A = `-a-${string}-`
type B = `-b-${string}-`
type C = `-c-${string}-`
type SuperString<S extends string = A> = `super${S}`
// …
function (record:{
	a: SuperString<A>,
	b: SuperString<B>,
	c: SuperString<C>,
})
```

Sometimes, it may help achieve uniformity and thereby ease comprehension. In this version, a quick scan makes `a` look out of place, which draws undue attention:
```ts
function (record:{
	a: SuperString,
	b: SuperString<B>,
	c: SuperString<C>,
})
```
