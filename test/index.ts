import { fileURLToPath } from 'url'
import { dirname } from 'path'
import glob from 'glob'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const tests = glob.sync(__dirname + '/**/*.test.ts')

tests.map(async test => {
  await import(test)
})
