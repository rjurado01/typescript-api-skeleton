import { Request, Response } from 'express'

import { Controller } from './Controller'

export class StatusGetController implements Controller {
  msg: string

  constructor(statusMsg: string) {
    this.msg = statusMsg
  }

  run(_req: Request, res: Response): void {
    res.status(200).send(this.msg)
  }
}
