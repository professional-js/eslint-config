import { memo } from 'react'
import External from './External'

export const A = () => <h1></h1>
export const B = function () {return <h1></h1>}
export const C = (()=>()=> <h1></h1>)()
export function D () {
	return <h1></h1>
}
export const E = memo(() => {
	return <h1>className="title"></h1>
})

export const Internal : VoidFunctionComponent () => <External />
export const Issue : VoidFunctionComponent () => <Missing />
