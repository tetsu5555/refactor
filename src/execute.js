const statement= require('./statement')
const plays = require('./plays.json')
const invoices = require('./invoices.json')

console.log(statement(invoices[0], plays))
