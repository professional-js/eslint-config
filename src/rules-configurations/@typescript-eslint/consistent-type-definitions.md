[@typescript-eslint/consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions)
======================================================================================================================================================================================
> Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
> Almost all features of an interface are available in type,
> the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

— [Official TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

Given that with current TypeScript the only feature of interfaces unavailable to type aliases is interface merging by redeclaration, and that type aliases offer several extra features over interfaces that you will be using regularly, type aliases are really the superior choice as a default.

## When to use `interface`
Obviously, you'd use an interface when you have to, that is when you need to merge interfaces or want to enable such merging.
When is this interface merging actually useful? That's when you:
1.	extend the `window` object or a prototype
1. improve pre-existing typings
1.	provide an object or class that should be extendable

### Extending
This is the primary use-case for interface merging.

When you extend the `window` object or some prototype, TypeScript needs to know about it so you can use that extension in a type-safe manner. Therefore, you'd extend the interface just like the implementation:
```ts
declare global {
	interface Window {
		extra: boolean
	}
}

window.extra = true
```

Just as with the implementation, you need to be very careful about such modifications. Most of the time, composition is preferable to modification because you will be certain to not break code that relies on the original shape of the original prototype.

### Improving typings
Sometimes the types provided by a library are inappropriate and you need to amend them. In those cases, endeavor to change the types in the library directly – that's what open source is for.

### Providing extensibility
Generally, composition is far preferable over modification.

If you build modular software such that you will have a single input JSON file for multiple modules, then each module may very well provide its own interface definition for that file and rely on that part, while the file provides all the data for all the dependent modules. You must be mindful, however regarding potential conflicts that can arise from splitting those modules into separate repositories, as opposed to a monorepo where conflicts will be easier to spot.
