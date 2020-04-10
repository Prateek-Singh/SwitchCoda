let Dow = require('./Dow').Dow
let KeyCode = require('./KeyCode').KeyCode
let ChangeCase = require('./ChangeCase').ChangeCase
let Billing = require('./Billing').Billing
let BillingRules = require('./Billing').BillingRules

//print day of week by passing day num
console.log('Day Of Week\n')
console.log(Dow.dayOfWeek(1))
console.log(Dow.dayOfWeek(2))
console.log(Dow.dayOfWeek(3))
console.log(Dow.dayOfWeek(4))
console.log(Dow.dayOfWeek(5))
console.log(Dow.dayOfWeek(6))
console.log(Dow.dayOfWeek(7))
console.log(Dow.dayOfWeek(8))

//print key map by passing key code
console.log('\nKey Code and Key Map\n')
console.log(KeyCode.getKeyMap(37))
console.log(KeyCode.getKeyMap(38))
console.log(KeyCode.getKeyMap(40))
console.log(KeyCode.getKeyMap(41))
console.log(KeyCode.getKeyMap(256))

//print case according to passed case and words
let wordsToLower = ["mIKe", "arTHur", "daNNy"]
let wordsToUpper = ["mIKe", "arTHur", "daNNy"]
let wordsToPascal = ["mIKe", "arTHur", "daNNy"]
console.log('\nCase according to passed case and words\n')
console.log(ChangeCase.changeCase(ChangeCase.changeWordsLowerCase, wordsToLower))
console.log(ChangeCase.changeCase(ChangeCase.changeWordsUpperCase, wordsToUpper))
console.log(ChangeCase.changeCase(ChangeCase.changeWordsPascalCase, wordsToPascal))


//print calculated Tariff based on passed cond and expr
console.log('\nCalculated Tariff based on passed cond and expr\n')
var billing = new BillingRules("units", "(units <= 100)", "(units * 1.35)")
console.log(Billing.compute(60, billing)) 

var billing = new BillingRules("units", "(units <= 300)", "(100 * 1.35) + ((units - 100) * 4.05)")
console.log(Billing.compute(150, billing)) 

var billing = new BillingRules("units", "(units <= 500)", "(100 * 1.35) + (200 * 4.05) + ((units - 300) * 6.75)")
console.log(Billing.compute(450, billing)) 

var billing = new BillingRules("units", "", "(100 * 1.35) + (200 * 4.05) + (300 * 6.75) + ((units - 500) * 8.0)")
console.log(Billing.compute(550, billing)) 

