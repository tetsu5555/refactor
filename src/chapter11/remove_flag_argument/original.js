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

// 条件記述の分解を行う
function deliveryDate(anOder, isRush) {
  if (isRush) {
    let deliveryTime
    if (["MA", "CT"].includes(anOder.deliveryState)) {
      deliveryTime = 1
    } else if (["NY", "NH"].includes(anOder.deliveryState)) {
      deliveryTime = 2
    } else {
      deliveryTime = 3
    }
    return anOder.placedOn.plusDays(1 + deliveryTime)
  } else {
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
}
