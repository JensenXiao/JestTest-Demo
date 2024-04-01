// calculator.js
const Calculator = {
  Sum: function(a, b) {
    if (this.checkNumber(a) && this.checkNumber(b)) {
      return a + b;
    } else {
      return null;
    }
  },
  Multiply: function(a, b) {
    if (this.checkNumber(a) && this.checkNumber(b)) {
      return a * b;
    } else {
      return null;
    }
  },
  Subtract: function(a, b) {
    if (this.checkNumber(a) && this.checkNumber(b)) {
      return a - b;
    } else {
      return null;
    }
  },
  Divide: function(a, b) {
    if (this.checkNumber(a) && this.checkNumber(b) && b !== 0) {
      return a / b;
    } else {
      return null;
    }
  },
  PerformActionBasedOnCondition: function(num) {
    if (this.isEven(num)) {
      return 'Even';
    } else {
      return 'Odd';
    }
  },
  checkNumber: function(num) {
    return num > 0;
  },
  isEven: function(num) {
    return num % 2 === 0;
  }
};

module.exports = Calculator;