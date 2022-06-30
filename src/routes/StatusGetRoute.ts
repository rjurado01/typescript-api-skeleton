import { Request, Response, Router } from 'express'

import { Controller } from '../controllers/Controller'
import { Route } from './Route'

export class StatusGetRoute implements Route {
  controller: Controller

  constructor(controller: Controller) {
    this.controller = controller
  }

  register(router: Router): void {
    router.get('/status', (req: Request, res: Response) => this.controller.run(req, res))
  }
}
