let assert = require('assert');
let calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('when type is SUM', function () {
    it('should add two numbers', function () {
      assert.equal(4, calculateNumber('SUM', 1, 3));
    });
    parameters = [
      //[type, a, b, return_value]
      ['SUM', 2.25, 2.5, 5],
      ['SUM', 1, 3.7, 5],
      ['SUM', 1.2, 3.7, 5],
      ['SUM', 1.5, 3.7, 6],
      ['SUM', 0.4, 0.1, 0],
    ]
    for (let parameter of parameters) {
      it(`should round numbers before adding ${parameter[0]}: ${parameter[1]} + ${parameter[2]} = ${parameter[3]}`, function () {
        assert.equal(parameter[3], calculateNumber(parameter[0], parameter[1], parameter[2]));
      });
    }
  });

  describe('when type is SUBTRACT', function () {
    it('should subtract two numbers', function () {
      assert.equal(-2, calculateNumber('SUBTRACT', 1, 3));
    });
    parameters = [
      //[type, a, b, return_value]
      ['SUBTRACT', 2.25, 2.5, -1],
      ['SUBTRACT', 1, 3.7, -3],
      ['SUBTRACT', 1.2, 3.7, -3],
      ['SUBTRACT', 1.5, 3.7, -2],
      ['SUBTRACT', 0.4, 0.1, 0],
      ['SUBTRACT', 4.3, 7.7, -4],
      ['SUBTRACT', 7.7, 4.3, 4],
    ]
    for (let parameter of parameters) {
      it(`should round numbers before subtraction ${parameter[0]}: ${parameter[1]} - ${parameter[2]} = ${parameter[3]}`, function () {
        const result = calculateNumber(parameter[0], parameter[1], parameter[2]);
        assert.equal(result, parameter[3], `Expected ${result} to be equal to ${parameter[3]}`);
      });
    }
  });

  describe('when type is DIVIDE', function () {
    it('should divide two numbers', function () {
      assert.equal(0.3333333333333333, calculateNumber('DIVIDE', 1, 3));
    });
    it('should return error whn denominator is 0', function () {
      assert.equal('Error', calculateNumber('DIVIDE', 5, 0));
      assert.equal('Error', calculateNumber('DIVIDE', 0.4, 0.3));
      assert.equal('Error', calculateNumber('DIVIDE', 0, 0));
    });
    parameters = [
      //[type, a, b, return_value]
      ['DIVIDE', 2.25, 2.5, 0.6666666666666666],
      ['DIVIDE', 1, 3.7, 0.25],
      ['DIVIDE', 1.2, 3.7, 0.25],
      ['DIVIDE', 1.5, 3.7, 0.5],
      ['DIVIDE', 4.3, 7.7, 0.5],
      ['DIVIDE', 7.7, 4.3, 2],
    ]
    for (let parameter of parameters) {
      it(`should round numbers before division ${parameter[0]}: ${parameter[1]} - ${parameter[2]} = ${parameter[3]}`, function () {
        const result = calculateNumber(parameter[0], parameter[1], parameter[2]);
        assert.equal(result, parameter[3], `Expected ${result} to be equal to ${parameter[3]}`);
      });
    }
  });
});
