import express from 'express'
import { Server as HttpServer} from 'http'

import { Route } from './routes/Route'

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

  loadRoutes(routes: Route[] = []) {
    routes.forEach(route => {
      route.register(this.express)
    })

    this.express.get('/', (_req, res) => {
      res.status(200).send('home')
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
