const isBasePriceMoreThan1000 = require('./index')

describe('isBasePriceMoreThan1000', () => {
  it('return false when basePrice is less than 1000', () => {
    const order = { basePrice: 1000 }
    expect(isBasePriceMoreThan1000(order)).toBe(false)
  })

  it('return true when basePrice is less than 1000', () => {
    const order = { basePrice: 1001 }
    expect(isBasePriceMoreThan1000(order)).toBe(true)
  })
})
