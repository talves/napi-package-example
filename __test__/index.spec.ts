import test from 'ava'

import { plus100, add } from '../index'

test('plus100 function from native code', (t) => {
  const fixture = 42
  t.is(plus100(fixture), fixture + 100)
})

test('add function from native code', (t) => {
  const fixture = 142
  t.is(add(100, 42), fixture)
})

