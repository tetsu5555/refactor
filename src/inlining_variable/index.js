module.exports = function price(order) {
  const basePrice = order.quantity * order.itemPrice
  return basePrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
}
