const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment')
const sinon = require('sinon')

describe('sendPaymentRequestToApi', function () {
  describe('spy on Utils.calculateNumber', function () {
    it('sendPaymentRequestToApi should call calculateNumber once with the right arguments', function () {
      const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledOnceWithExactly(calculateNumberSpy, "SUM", 100, 20)

      calculateNumberSpy.restore();
    });
  });
});
