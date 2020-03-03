module.exports = function isBasePriceMoreThan1000(anOrder) {
  let basePrice = anOrder.basePrice
  return (basePrice > 1000)
}
