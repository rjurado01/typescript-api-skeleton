import request from 'supertest'

import { Server } from '../src/server'

describe('Example Test', function () {
  it('should GET / with 200 OK', async function () {
    const server = new Server('8001')
    server.loadRoutes()

    await request(server.getHttpServer())
      .get('/')
      .expect(response => {
        expect(response.status).toEqual(200)
      })
  })
})
