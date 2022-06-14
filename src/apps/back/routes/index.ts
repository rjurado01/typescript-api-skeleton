import { Router } from 'express'
import glob from 'glob'

export function registerRoutes(router: Router) {
  const routes = glob.sync(__dirname + '/*Route.ts')
  routes.map(route => register(route, router))
}

function register(routePath: string, router: Router) {
  const route = require(routePath)
  console.log(route)
  route.register(router)
}
