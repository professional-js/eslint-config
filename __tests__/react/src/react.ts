import { createElement, memo } from 'react'

export const A = () => createElement('h1')
export const B = function () {return createElement('h1')}
export const C = (()=>()=> createElement('h1'))()
export function D () {
	return createElement('h1')
}
export const E = memo(() => {
	return createElement('h1')
})
