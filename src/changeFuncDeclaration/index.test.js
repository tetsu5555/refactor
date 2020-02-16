const { circum, circumference } = require('./index')

describe('circum', () => {
  it('circum', () => {
    expect(circum(2)).toBe(4 * Math.PI)
  })

  it('circumference', () => {
    expect(circumference(2)).toBe(4 * Math.PI)
  })
})
