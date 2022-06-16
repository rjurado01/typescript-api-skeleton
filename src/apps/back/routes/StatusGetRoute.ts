import { Request, Response, Router } from 'express'

import { StatusGetController } from '../controllers/StatusGetController'
import { Route } from './Route'

export const route: Route = {
  register: (router: Router) => {
    const controller = new StatusGetController

    router.get('/status', (req: Request, res: Response) => controller.run(req, res))
  }
}
