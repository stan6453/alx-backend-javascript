const request = require('request');

request.post('http://127.0.0.1:7865/login',
  {
    body: JSON.stringify({ userName: 'Stanley' }),
    json:true,
  },
  function (error, response) {
    console.log(response.body);
  }
);