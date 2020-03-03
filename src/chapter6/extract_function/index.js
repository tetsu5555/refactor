const printOwing = function(invoice) {
  printBanner()
  const outstanding = calculateOutstanding()
  recordDueDate(invoice)
  printDetails(invoice, outstanding)

  function printBanner() {
    console.log("************************\n")
    console.log("**** Customer Owes ****\n")
    console.log("***********************\n")
  }

  function recordDueDate(invoice) {
    const today = new Date()
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)
  }

  function calculateOutstanding() {
    let result = 0
    for (const o of invoice.orders) {
      result += o.amount
    }
    return result
  }

  function printDetails(invoice, outstanding) {
    console.log(`name: ${invoice.customer}\n`)
    console.log(`amount: ${outstanding}\n`)
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`)
  }
}

module.exports = { printOwing }
