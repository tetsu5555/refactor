// 条件記述の統合

function disabilityAmount(aEmployee) {
  // 結果は全て同じため、条件を一つにまとめる
  if (aEmployee.seniority < 2
    || aEmployee.monthsDisabled > 12
    || aEmployee.isPartTime) return 0
  // 障害手当を計算する
}
