import test from 'node:test'
import request from 'supertest'

import { Server } from '../../../../src/apps/back/server.js'

const server = new Server('3001')
await server.loadRoutes()
const app = server.getHttpServer()

test('responds with 200', async () => {
  await request(app).get('/status').expect(200)
})
