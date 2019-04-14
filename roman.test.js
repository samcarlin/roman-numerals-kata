const roman = require('./roman')

describe('roman', () => {
  test('returns I for 1', () => {
    let result = roman.convert(1)
    expect(result).toBe('I')
  })
})