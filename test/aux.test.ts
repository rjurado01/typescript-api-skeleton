import test from 'node:test'
import assert from 'node:assert'

test('aux', async t => {
  await t.test('aux 1', () => {
    assert.equal(1, 1, 'ok')
  })

  await t.test('aux 2', () => {
    assert.equal(1, 2, 'ko')
  })
})
