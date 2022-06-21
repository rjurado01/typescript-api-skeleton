import { Server } from './server.js'

export class BackApp {
  server?: Server

  async start() {
    this.server = new Server(process.env.PORT || '3000')

    await this.server.loadRoutes()

    this.server.listen()
  }

  stop() {
    this.server?.stop()
  }
}
