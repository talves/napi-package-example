const { plus100, add, getCwd } = require('./index')

console.assert(plus100(0) === 100, 'Simple test failed (plus100)')
console.assert(add(52, 48) === 100, 'Simple test failed (add)')

console.info('Simple test passed')

getCwd((result) => {
  console.log('called from:', result)
})
