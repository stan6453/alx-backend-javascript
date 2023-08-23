const sendPaymentRequestToApi = require('./5-payment')
const sinon = require('sinon')

describe('sendPaymentRequestToApi', function () {
  describe('test console.log', function () {
    let logStub;

    beforeEach(function () {
      logStub = sinon.spy(console, 'log');
    });

    afterEach(function () {
      logStub.restore();
    });

    it('console.log is called once with the right argument', function () {
      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledOnceWithExactly(logStub, 'The total is: 120')
    });

    it('console.log is called once with the right argument', function () {
      sendPaymentRequestToApi(10, 10);
      sinon.assert.calledOnceWithExactly(logStub, 'The total is: 20')
    });
  });
});
