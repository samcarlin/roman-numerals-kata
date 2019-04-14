const roman = require('./roman')

describe('roman', () => {
  test('returns I for 1', () => {
    let result = roman.convert(1)
    expect(result).toBe('I')
  })

  test('returns II for 2', () => {
    let result = roman.convert(2)
    expect(result).toBe('II')
  })

  test('returns III for 3', () => {
    let result = roman.convert(3)
    expect(result).toBe('III')
  })

  test('returns IV for 4', () => {
    let result = roman.convert(4)
    expect(result).toBe('IV')
  })

  test('returns V for 5', () => {
    let result = roman.convert(5)
    expect(result).toBe('V')
  })

  test('returns VI for 6', () => {
    let result = roman.convert(6)
    expect(result).toBe('VI')
  })

  test('returns VII for 7', () => {
    let result = roman.convert(7)
    expect(result).toBe('VII')
  })

  test('returns VIII for 8', () => {
    let result = roman.convert(8)
    expect(result).toBe('VIII')
  })

  test('returns IX for 9', () => {
    let result = roman.convert(9)
    expect(result).toBe('IX')
  })

  test('returns X for 10', () => {
    let result = roman.convert(10)
    expect(result).toBe('X')
  })
})