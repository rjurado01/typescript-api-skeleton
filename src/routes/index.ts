import { Router } from 'express'
import glob from 'glob'

export async function registerRoutes(router: Router) {
  const routes = glob.sync(__dirname + '/?*Route.*')
  const loaders = routes.map(route => register(
    route.replace(__dirname, '.'),
    router
  ))

  await Promise.all(loaders)
}

async function register(routePath: string, router: Router) {
  const { route } = await import(routePath)
  route.register(router)
}
