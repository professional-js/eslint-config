[import/no-extraneous-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/no-extraneous-dependencies.md)
============================================================================================================================================
Importing any packages without declaring the intention to do so in `package.json` can (and often will) lead to errors.


## devDependencies
Development dependencies are only available during development, so they should not be relied on in production code.

Since the conventional location for production code is `src`, that is set to disallow importing development dependencies while files outside are allowed to import development dependencies.

If your project is setup differently, think about that again! Having all production code in a clearly separated area helps distinguish what your consumer will see and what not. That also helps deciding if a change is breaking or not, because all changes outside `src` are non-breaking if the separation is setup properly.


## optionalDependencies
Since optional dependencies are optional, you cannot rely on them being available at runtime. When you have a use-case for an optional dependency, you need to be extra careful. That's why they are generally to be forbidden.

If you have a valid need for an optional dependency, this is the proper pattern to use:
```js
// eslint-disable-next-line import/no-extraneous-dependencies
import('@/some-optional-dependency')
.then(someOptionalDependency => doSomethingWith(someOptionalDependency))
.catch(reason => fallback(reason))
```

Be aware that this `eslint-disable-next-line` comment marks this a [danger zone](https://en.wikipedia.org/wiki/Here_be_dragons), so beware!


## peerDependencies
Peer dependencies mark packages that your package is supposed to be used with. That really means interface compatibility, and your consumer could replace your peer dependency with an equally qualified alternative and leave out the specific package.

That does happen in practice. For example, a React plugin may list React 16 as a peer dependency and a consumer may instead install React 17. Since [React 17 has the same runtime interface as React 16](https://reactjs.org/blog/2020/10/20/react-v17.html), this should work without a hitch despite violating the peer dependency. Beyond simple version differences, packages can be replaced by [others](https://duckduckgo.com/?q=js+drop-in+replacement).

That is why peer dependencies are not enforced but merely warned about. When that happens and you rely on the peer dependency being available, you have published a faulty product.

When you are confronted with this situation, first determine if you really should be importing the dependency directly. Usually, when you provide a package with a peer dependency, you should be able to get the feature you need from the integrating system. If that does not work and you have a valid need, just add it as a dependency as well. That way, your package will share the common dependency with your consumer if possible, and use its own when the consumer uses something else.

The latter may not be ideal, but it works. **Relying on a peer dependency**, on the other hand, is not just not ideal, it **is a failure waiting to happen**, so avoid it.


## bundledDependencies
These are fine. They are bundled, so you should be able to rely on them even more than your `dependencies`.
