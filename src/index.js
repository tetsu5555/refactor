const statement= require('./chapter1/statement')
const plays = require('./data/plays.json')
const invoices = require('./data/invoices.json')

console.log(statement(invoices[0], plays))
