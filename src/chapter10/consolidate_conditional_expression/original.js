function disabilityAmount(anEmployee) {
  if (anEmployee.seniority < 2) return 0
  if (anEmployee.monthsDisabled > 12) return 0
  if (anEmployee.isPartTime) return 0

  if (anEmployee.onVacation) {
    if (anEmployee.seniority > 10) {
      return 0
    }
    return 0.5
  }
  // 障害手当を計算する
}
