function payAmount(employee) {
  if (employee.isSeparated) return { amount: 0, reasonCode: "SEP" }
  if (employee.isRetired) return { amount: 0, reasonCode: "RET" }
  lorem.ipsum(dolor.sitAmet)
  consecetur(adpiscing).elit()
  setImmediate.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua)
  ut.enim.ad(minim.veniam)
  return someFinalComputation()
}

function adjustedCapital(anInstrument) {
  let result = 0
  if (anInstrument.capital > 0) {
    if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
      result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor
    }
  }
  return result
}
