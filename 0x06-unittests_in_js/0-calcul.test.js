let assert = require('assert');
let calculateNumber = require('./0-calcul');

describe('calculateNumber', function(){

  it('should add two numbers', function(){
    assert.equal(4, calculateNumber(1, 3));
  });

  it('should round numbers before adding', function(){
    assert.equal(5, calculateNumber(2.25, 2.5));
    assert.equal(5, calculateNumber(1, 3.7));
    assert.equal(5, calculateNumber(1.2, 3.7));
    assert.equal(6, calculateNumber(1.5, 3.7));
    assert.equal(0, calculateNumber(0.4, 0.1));
  });
});