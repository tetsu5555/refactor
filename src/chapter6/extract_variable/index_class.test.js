const Order = require('./index_class')

test('Order classgs', () => {
  const record = {
    itemPrice: 5000,
    quantity: 4
  }

  const order = new Order(record)
  expect(order.price).toBe(20100)
})
