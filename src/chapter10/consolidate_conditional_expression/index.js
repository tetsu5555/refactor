function disabilityAmount(aEmployee) {
  if (aEmployee.seniority < 2) return 0
  if (aEmployee.monthsDisabled > 12) return 0
  if (aEmployee.isPartTime) return 0
  // 障害手当を計算する
}
