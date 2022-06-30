import { Router } from 'express'

import { Controller } from '../controllers/Controller'

export interface Route {
  controller: Controller

  register(router: Router): void
}
