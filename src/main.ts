import { BackApp } from './BackApp'

const run = async () => {
  const app = new BackApp()

  await app.start()
}

run()
