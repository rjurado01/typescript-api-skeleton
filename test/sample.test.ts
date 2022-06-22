import test from 'node:test'
import assert from 'node:assert'
import  { number } from '../src/check.js'

test('sample', async t => {
  await t.test('example test', () => {
    assert.equal(1, 2, 'chungo cubata')
  })

  await t.test('example object test', () => {
    assert.deepEqual({a: {b: 1}}, {a: {b: 1}})
  })

  await t.test('async test', async () => {
    const number = await Promise.resolve(2)
    assert.equal(number, 2)
  })

  await t.test('fetch', async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const json = await response.json()
    assert.equal(json.name, 'ditto')
  })

  await t.test('typescript module', () => {
    assert.equal(number, 3)
  })
})
