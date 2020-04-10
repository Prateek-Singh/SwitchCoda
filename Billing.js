//Define rule for calculating tariff
//pass the variable name, condition and Expression
function BillingRules (vars, cond, expr) {
  this.regex = new RegExp(vars, 'g')
  this.cond = cond
  this.expr = expr
}

function Billing(){
}

//Substitute actual variable value for variable name from the expression
Billing.substitute = function (units, BillingRules) {
  BillingRules.cond = BillingRules.cond.replace(BillingRules.regex, units)
  BillingRules.expr = BillingRules.expr.replace(BillingRules.regex, units)
}

//call Substitute and then based on cond evaluate expressions
Billing.compute = function (units, BillingRules) {
  Billing.substitute(units, BillingRules)
  if ((new Function("return " + BillingRules.cond)())) {
    return (new Function("return " + BillingRules.expr))()
  }
  return (new Function("return " + BillingRules.expr))()
}

module.exports = {
  Billing,
  BillingRules
}



