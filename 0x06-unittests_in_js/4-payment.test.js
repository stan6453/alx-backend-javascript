const Utils = require('./utils')
const sendPaymentRequestToApi = require('./4-payment')
const sinon = require('sinon')

describe('sendPaymentRequestToApi', function () {
  describe('stub Utils.calculateNumber', function () {
    it('sendPaymentRequestToApi should log the right text', function () {
      const logStub = sinon.spy(console, 'log');
      const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
      calculateNumberStub.returns(10);

      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledOnceWithExactly(calculateNumberStub, "SUM", 100, 20)
      sinon.assert.calledOnceWithExactly(logStub, 'The total is: 10')

      calculateNumberStub.restore();
      logStub.restore();
    });
  });
});
