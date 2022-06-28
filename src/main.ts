import { Server } from './server.js'

const app = async () => {
  const server = new Server(process.env.PORT || '3000')

  await server.loadRoutes()

  return server.listen()
}

app()
