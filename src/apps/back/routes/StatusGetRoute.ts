import { Request, Response, Router } from 'express'

import { StatusGetController } from '../controllers/StatusGetController'
import container from '../di'
import { Route } from './Route'

export const route: Route = {
  register: (router: Router) => {
    const controller: StatusGetController =
      container.get('Apps.back.controllers.StatusGetController')

    router.get('/status', (req: Request, res: Response) => controller.run(req, res))
  }
}
