const request = require('request');
const expect = require('chai').expect

describe('app.js API integration test', function () {
  describe('test when the root route / is successfully accessed', function () {
    let globalRequestObject;
    before(function (done) {
      request.get('http://127.0.0.1:7865/', function (error, response) {
        globalRequestObject = response;
        done();
      });
    });

    it('should have a 200 status code', function () {
      expect(globalRequestObject.statusCode).to.equal(200)
    });
    it('should return the correct content', function () {
      expect(globalRequestObject.body).to.equal('Welcome to the payment system');
    });
  });
});
