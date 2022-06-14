import { Server } from './server'

const server = new Server(process.env.PORT || '3000')

server.listen()
