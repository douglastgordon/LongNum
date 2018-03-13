const dividend = 22

Number.prototype.divide = function (divisor, digits=20) {
  let quotient = Math.floor(this / divisor).toString() + "."
  let remainder = this % divisor
  while (!quotient || quotient.toString().length < digits) {
    if (remainder < divisor) {
      remainder *= 10
    } else {
      quotient += Math.floor(remainder / divisor)
      remainder = remainder % divisor
    }
  }
  return quotient
}


console.log(dividend.divide(7, 30))
console.log(22/7)
