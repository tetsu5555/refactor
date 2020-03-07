function payAmount(employee) {
  let result
  if (employee.isSeparated) {
    result = { amount: 0, reasonCode: "SEP" }
  } else {
    if (employee.isRetired) {
      result = { amount: 0, reasonCode: "RET" }
    } else {
      lorem.ipsum(dolor.sitAmet)
      consecetur(adpiscing).elit()
      setImmediate.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua)
      ut.enim.ad(minim.veniam)
      result = someFinalComputation()
    }
  }
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
