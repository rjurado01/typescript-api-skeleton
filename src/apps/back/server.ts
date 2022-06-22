import express from 'express'
import { Server as HttpServer} from 'http'

import { registerRoutes } from './routes/index.js'

export class Server {
  private express: express.Express
  private port: string
  private httpServer?: HttpServer

  constructor(port: string) {
    this.port = port
    this.express = express()

    this.express.use(express.json()) // middleware que transforma la req.body a un json
    // app.use(express.urlencoded({ extended: true }));
  }

  async loadRoutes() {
    await registerRoutes(this.express)

    this.express.get('/ping', async (_req, res) => {
      await new Promise<void>(resolve => {
        setTimeout(() => { resolve() }, 3000)
      })

      res.send('pong')
    })
  }

  listen(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        console.log(`Server runnig on port ${this.port}`)
      })

      this.httpServer.on('listening', resolve)
    })
  }

  stop(): Promise<void> {
    return new Promise(resolve => {
      if (this.httpServer) {
        this.httpServer.close()

        this.httpServer.on('close', resolve)
      }

      resolve()
    })
  }

  getHttpServer() {
    return this.express
  }
}
