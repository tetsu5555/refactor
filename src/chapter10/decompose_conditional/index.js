function calculateCharge() {
  let charge = 0
  if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
    charge = quantity * plan.summerRate
  } else {
    charge = quantity * plan.regularRate + plan.regularServiceCharge
  }
  return charge
}

function main() {

}
