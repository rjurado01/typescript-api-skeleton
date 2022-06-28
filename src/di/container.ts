import {createContainer, asValue, asClass, InjectionMode} from 'awilix'

import {StatusGetController} from '../controllers/StatusGetController.js'

const env = process.env.NODE_ENV || 'dev'

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
})

const { dependencies } = await import(`./dependencies_${env}.js`)

container.register(dependencies)

export const statusGetController = container.resolve('statusGetController')
