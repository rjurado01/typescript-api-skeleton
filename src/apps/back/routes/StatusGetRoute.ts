import { Request, Response, Router } from 'express'

import { StatusGetController } from '../controllers/StatusGetController'
import { statusGetController } from '../di/container.js'
import { Route } from './Route'

export const route: Route = {
  register: (router: Router) => {
    const controller: StatusGetController = statusGetController

    router.get('/status', (req: Request, res: Response) => controller.run(req, res))
  }
}
