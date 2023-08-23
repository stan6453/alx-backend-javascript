const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = require('chai').expect;
describe('getPaymentTokenFromAPI', function () {
  it('getPaymentTokenFromAPI should resolve to a valid data when success is true', function (done) {
    return getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.eql({ data: 'Successful response from the API' });
        done();
      });
  });
});