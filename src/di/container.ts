import {createContainer, InjectionMode} from 'awilix'

const env = process.env.NODE_ENV || 'dev'

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
})

const { dependencies } = require(`./dependencies_${env}`)

container.register(dependencies)

export const statusGetController = container.resolve('statusGetController')
