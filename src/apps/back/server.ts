import express from 'express'

import { registerRoutes } from './routes/index.js'

export class Server {
  private express: express.Express
  private port: string

  constructor(port: string) {
    this.port = port
    this.express = express()

    this.express.use(express.json()) // middleware que transforma la req.body a un json

    // app.use(express.urlencoded({ extended: true }));
    registerRoutes(this.express)

    this.express.get('/ping', async (_req, res) => {
      await new Promise(resolve => {
        setTimeout(() => { resolve('foo') }, 2000)
      })

      res.send('pong')
    })
  }

  listen(): void {
    this.express.listen(this.port, () => {
      console.log(`Server runnig on port ${this.port}`)
    })
  }
}
