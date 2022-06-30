import { container, setup } from './di/container'
import { Server } from './server'

export class BackApp {
  server?: Server

  async start() {
    await setup(process.env.NODE_ENV || 'dev') // initialize container

    console.log(container.resolve('statusMsg'))

    this.server = new Server(process.env.PORT || '3000')

    await this.server.loadRoutes()

    this.server.listen()
  }

  async stop() {
    return this.server?.stop()
  }

  getHttpServer() {
    return this.server?.getHttpServer
  }
}
