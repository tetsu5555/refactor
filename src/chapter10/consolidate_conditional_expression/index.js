// 条件記述の統合

function disabilityAmount(anEmployee) {
  // 結果は全て同じため、条件を一つにまとめる
  if (isNotEligileForDisability()) return 0

  if (anEmployee.onVacation && anEmployee.seniority > 10) return 0
  return 0.5

  // 関数として抜き出す
  function isNotEligileForDisability() {
    return (anEmployee.seniority < 2
            || anEmployee.monthsDisabled > 12
            || anEmployee.isPartTime)
  }
}
