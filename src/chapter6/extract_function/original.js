const printOwing = function(invoice) {
  let outstanding = 0

  console.log("************************\n")
  console.log("**** Customer Owes ****\n")
  console.log("***********************\n")

  for (const o of invoice.orders) {
    outstanding += o.amount
  }

  const today = new Date()
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)

  console.log(`name: ${invoice.customer}\n`)
  console.log(`amount: ${outstanding}\n`)
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`)
}

module.exports = { printOwing }
