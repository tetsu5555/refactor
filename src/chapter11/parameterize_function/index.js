function baseCharge(usage) {
  if (usage < 0) return 0
  const amount = bottomBand(usage) * 0.03
                + withinBand(usage, 200, 100) * 0.05
                + topBand(usage) * 0.07
  return amount
}

function withinBand(usage, bottom, top) {
  return usage > 100 ? Math.min(usage, 200) - 100 : 0
}

function bottomBand(usage) {
  return Math.min(usage, 100)
}

// 関連する複数の関数をパラメータ付きにしようとする時は関数を一つ取り上げてそれにパラメータを追加する
// 範囲に基づくロジックでは通常中間の値から手を付けるらしい
function middleBand(usage) {
  return usage > 100 ? Math.min(usage, 200) - 100 : 0
}

function topBand(usage) {
  return usage > 200 ? usage - 200 : 0
}
