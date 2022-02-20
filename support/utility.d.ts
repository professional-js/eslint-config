export type Mutable<R> = (
	R extends DeepReadonlyArray<infer T> ? Array<Mutable<T>> :
	R extends DeepReadonlyObject<infer T> ? T :
	R extends DeepReadonly<infer T> ? T :
	R extends Readonly<infer T> ? T :
	R
)

// https://stackoverflow.com/a/49670389

export type DeepReadonly<T> = (
	T extends Array<infer R> ? DeepReadonlyArray<R> :
	T extends (...arguments: Array<never>) => unknown ? T :
	T extends object ? DeepReadonlyObject<T> :
	T
)

type DeepReadonlyObject<T> = {
	readonly [P in keyof T]: DeepReadonly<T[P]>
}

type DeepReadonlyArray<T> = ReadonlyArray<DeepReadonly<T>>
