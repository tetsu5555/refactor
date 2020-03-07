function setDimension(name, value) {
  if (name === "height") {
    this._height = value
    return
  }
  if (name === "width") {
    this._width = value
    return
  }
}

// 条件記述の分解を適用する
function deliveryDate(anOder, isRush) {
  if (isRush) {
    return rushDeliveryDate(anOder)
  } else {
    return regularDeliveryDate(anOder)
  }
}

function rushDeliveryDate(anOder) {
  let deliveryTime
  if (["MA", "CT"].includes(anOder.deliveryState)) {
    deliveryTime = 1
  } else if (["NY", "NH"].includes(anOder.deliveryState)) {
    deliveryTime = 2
  } else {
    deliveryTime = 3
  }
  return anOder.placedOn.plusDays(1 + deliveryTime)
}

function regularDeliveryDate(anOder) {
  let deliveryTime
  if (["MA", "CT", "NY"].includes(anOder.deliveryState)) {
    deliveryTime = 2
  } else if (["ME", "NH"].includes(anOder.deliveryState)) {
    deliveryTime = 3
  } else {
    deliveryTime = 4
  }
  return anOder.placedOn.plusDays(2 + deliveryTime)
}
