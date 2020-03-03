const { printOwing } = require('./index')

const invoice = {
  customer: 'hoge',
  orders: [
    {
      name: 'a',
      amount: 10
    },
    {
      name: 'b',
      amount: 3
    }
  ]
}

// 日付がUTCになる問題
const log = `************************
**** Customer Owes ****
***********************
name: hoge
amount: 13
due: 2020-3-17`

let outputData = ""
let storeLog = inputs => (outputData += inputs)
test('printOwing', () => {
  console["log"] = jest.fn(storeLog)
  printOwing(invoice)
  expect(outputData).toBe(log)
})


