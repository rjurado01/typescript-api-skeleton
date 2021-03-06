import { Router } from 'express'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import glob from 'glob'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function registerRoutes(router: Router) {
  const routes = glob.sync(__dirname + '/?*Route.ts')
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
