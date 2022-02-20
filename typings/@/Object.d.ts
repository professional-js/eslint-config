// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface ObjectConstructor {
	fromEntries<
		V extends ReadonlyArray<
			readonly [PropertyKey, unknown]
		>,
	>(entries: V): {
		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		[K in V[number][0]]: V[number][1]
	}

	entries<O>(o: O): Array<[keyof O, O[keyof O]]>
}
