const price = require('./index')

test('price', () => {
  const order = {
    itemPrice: 5000,
    quantity: 4
  }

  console.log(price(order))
  expect(price(order)).toBe(20100)
})
