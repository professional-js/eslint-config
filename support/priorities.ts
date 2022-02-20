export const IMPORTANT = `IMPORTANT`
export const HELPFUL = `HELPFUL`
export const TASTE = `TASTE`

export default [
	IMPORTANT,
	HELPFUL,
	TASTE,
]

export type Priority = (
	| typeof IMPORTANT
	| typeof HELPFUL
	| typeof TASTE
)
