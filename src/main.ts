import { Server } from './server'

const app = async () => {
  const server = new Server(process.env.PORT || '3000')

  await server.loadRoutes()

  return server.listen()
}

app()
