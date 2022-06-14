import { Request, Response } from 'express'

import { Controller } from './Controller'

// import CoursesData from "../../data/courses.json";

export class StatusGetController implements Controller {
  run(req: Request, res: Response): void {
    res.status(200).send('ok')
  }
}

// export const loadApiEndpoints = (app: Application): void => {
//   app.get("/api", (req: Request, res: Response) => {
//     return res.status(200).send(CoursesData);
//   });
// };
