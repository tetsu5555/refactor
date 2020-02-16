// Deprecated(古い方はDeprecateにする)
const circum = function(radius) {
  // 古い関数の呼び出し箇所を全て探しそれぞれを新たな関数呼び出しに置き換える
  return circumference(radius)
}

// 徐々にこっちの関数を使うように変更していく
const circumference = function(radius) {
  return 2 * Math.PI * radius
}

module.exports = {
  circum,
  circumference
}
