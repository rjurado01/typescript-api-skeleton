import { container, setup } from './di/container'
import { Route } from './routes/Route'
import { Server } from './server'

export class BackApp {
  server?: Server

  async start() {
    await setup(process.env.NODE_ENV || 'dev') // initialize container

    console.log(container.resolve('statusMsg'))

    this.server = new Server(process.env.PORT || '3000')

    const routes: Route[] = Object.keys(container.registrations).filter(
      item => item.match(/Route$/)
    ).map((name): Route => {
      return container.resolve(name)
    })

    this.server.loadRoutes(routes)

    this.server.listen()
  }

  async stop() {
    return this.server?.stop()
  }

  getHttpServer() {
    return this.server?.getHttpServer
  }
}
