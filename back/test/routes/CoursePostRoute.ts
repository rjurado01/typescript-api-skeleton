import request from 'supertest'

import { Server } from '../../src/server'

describe('CoursePostRoute', function () {
  it('should Post / with 201 OK', async function () {
    const server = new Server('8001')
    server.loadRoutes()

    await request(server.getHttpServer())
      .post('/courses')
      .expect(response => {
        expect(response.status).toEqual(201)
      })
  })
})
