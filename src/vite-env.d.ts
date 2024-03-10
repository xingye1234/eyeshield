/// <reference types="vite/client" />

declare module '~react-pages' {
	import type { RouteObject } from 'react-router'

	const routes: RouteObject[]
	export default routes
}