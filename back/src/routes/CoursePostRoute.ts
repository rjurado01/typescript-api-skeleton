import { Request, Response, Router } from 'express'

import { Controller } from '../controllers/Controller'
import { Route } from './Route'

export class CoursePostRoute implements Route {
  controller: Controller

  constructor(coursePostController: Controller) {
    this.controller = coursePostController
  }

  register(router: Router): void {
    router.post('/courses', (req: Request, res: Response) => this.controller.run(req, res))
  }
}
