import request from 'supertest'

import { Server } from '../../src/server'
import { StatusGetRoute } from '../../src/routes/StatusGetRoute'
import { Controller } from '../../src/controllers/Controller'

describe('StatusGetRoute', function () {
  const run = jest.fn((_req, res) => { res.send() })
  const controller: Controller = { run }

  it('should GET / with 200 OK', async function () {
    const server = new Server('8001')
    const route = new StatusGetRoute(controller)
    route.register(server.getHttpServer())

    await request(server.getHttpServer()).get('/status')

    // expect(run.mock.calls.length).toBe(1)
    expect(controller.run).toHaveBeenCalled()
  })
})
