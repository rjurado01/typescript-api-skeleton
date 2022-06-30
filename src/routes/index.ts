import { Router } from 'express'
import glob from 'glob'

import { Route } from './Route'

export async function registerRoutes(router: Router) {
  const routes = glob.sync(__dirname + '/?*Route.*')
  const loaders = routes.map(route => register(
    route.replace(__dirname, '.'),
    router
  ))

  await Promise.all(loaders)
}

interface RouteContructor {
  new(): Route
}

async function register(routePath: string, router: Router) {
  const routeAttrs = await import(routePath)
  const routeClass: RouteContructor = Object.values(routeAttrs)[0] as RouteContructor
  const route = new routeClass
  route.register(router)
}
