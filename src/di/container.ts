import {createContainer, InjectionMode} from 'awilix'

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
})

const setup = async (env: string | undefined) => {
  if (!env) return

  const { dependencies } = await import(`./dependencies_${env}`)

  return container.register(dependencies)
}

export {
  container,
  setup
}
