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
