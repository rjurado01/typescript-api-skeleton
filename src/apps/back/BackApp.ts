import { Server } from './server.js'

export class BackApp {
  server?: Server

  start() {
    this.server = new Server(process.env.PORT || '3000')

    this.server.listen()
  }

  stop() {
    this.server?.stop()
  }
}
