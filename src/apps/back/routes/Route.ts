import { Router } from 'express'

export interface Route {
  register(router: Router): void
}
