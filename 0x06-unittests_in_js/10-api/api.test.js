const request = require('request');
const expect = require('chai').expect

describe('app.js API integration test', function () {
  describe('test when the root route / is successfully accessed', function () {
    let requestObject;
    before(function (done) {
      request.get('http://127.0.0.1:7865/', function (error, response) {
        requestObject = response;
        done();
      });
    });

    it('should have a 200 status code', function () {
      expect(requestObject.statusCode).to.equal(200)
    });
    it('should return the correct content', function () {
      expect(requestObject.body).to.equal('Welcome to the payment system');
    });
  });


  describe('test the /cart/:id route', function () {
    describe('test when the  /cart/:id route is successfully accessed', function () {
      let requestObject;
      before(function (done) {
        request.get('http://127.0.0.1:7865/cart/20', function (error, response) {
          requestObject = response;
          done();
        });
      });

      it('should have a 200 status code', function () {
        expect(requestObject.statusCode).to.equal(200)
      });
      it('should return the correct content', function () {
        expect(requestObject.body).to.equal('Payment methods for cart 20');
      });
    });

    describe('test when the /cart/:id does not get an integer as the :id value', function () {
      let requestObject;
      before(function (done) {
        request.get('http://127.0.0.1:7865/cart/2A', function (error, response) {
          requestObject = response;
          done();
        });
      });

      it('should have a 404 status code', function () {
        expect(requestObject.statusCode).to.equal(404)
      });
    });
  });


  describe('test the /available_payments route', function () {
    describe('test successful calls to /available_payments', function () {
      let requestObject;
      before(function (done) {
        request.get('http://127.0.0.1:7865/available_payments', function (error, response) {
          requestObject = response;
          done();
        });
      });

      it('should have a 200 status code', function () {
        expect(requestObject.statusCode).to.equal(200)
      });
      it('should return the correct content', function () {
        expect(JSON.parse(requestObject.body)).to.eql({ "payment_methods": { "credit_cards": true, "paypal": false } });
      });
    });
  });


  describe('test the /login route', function () {
    describe('test successful calls to /login', function () {
      let requestObject;
      before(function (done) {
        request.post('http://127.0.0.1:7865/login',
          {
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName: 'Stanley' }),
          },
          function (error, response) {
            requestObject = response;
            done();
          }
        );
      });

      it('should have a 200 status code', function () {
        expect(requestObject.statusCode).to.equal(200)
      });
      it('should return the correct content', function () {
        expect(requestObject.body).to.equal('Welcome Stanley');
      });
    });
  });
});
