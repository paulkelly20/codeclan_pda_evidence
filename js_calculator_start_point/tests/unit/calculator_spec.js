var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('calculator can add', function(){
    calculator.add(2);
    calculator.operatorClick('=');
    calculator.add(2);
    assert.equal(4, calculator.runningTotal)
  })

  it('calculator can subtract', function(){
    calculator.add(5);
    calculator.operatorClick('=');
    calculator.subtract(1)
    assert.equal(4, calculator.runningTotal)
  })

  it('calculator can multiply', function(){
    calculator.add(5);
    calculator.operatorClick('=');
    calculator.multiply(5)
    assert.equal(25, calculator.runningTotal)
  })

  it('calculator can divide', function(){
    calculator.add(10);
    calculator.operatorClick('=');
    calculator.divide(5)
    assert.equal(2, calculator.runningTotal)
  })

  it('calculator show a number after click', function(){
  calculator.numberClick(5)
  assert.equal(5, calculator.runningTotal)
  })

  it('operator click works', function(){
  calculator.numberClick(5)
  calculator.operatorClick("+")
  calculator.numberClick(5)
  calculator.operatorClick("=")
  assert.equal(10, calculator.runningTotal)
  })

  it('clear click works', function(){
  calculator.numberClick(5)
  calculator.clearClick()
  assert.equal(0, calculator.runningTotal)
  })

});
