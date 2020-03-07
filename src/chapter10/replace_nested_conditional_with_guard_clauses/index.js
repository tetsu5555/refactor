function payAmount(employee) {
  if (employee.isSeparated) return { amount: 0, reasonCode: "SEP" }
  if (employee.isRetired) return { amount: 0, reasonCode: "RET" }
  lorem.ipsum(dolor.sitAmet)
  consecetur(adpiscing).elit()
  setImmediate.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua)
  ut.enim.ad(minim.veniam)
  return someFinalComputation()
}

// 「ガード節による入れ子の条件記述の置き換え
function adjustedCapital(anInstrument) {
  let result = 0
  if (anInstrument.capital <= 0
    ||anInstrument.interestRate <= 0
    || anInstrument.duration <= 0) return result
  return (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor
}
