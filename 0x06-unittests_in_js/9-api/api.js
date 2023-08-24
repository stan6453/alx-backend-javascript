const express = require('express');

const app = express();
const port = 7865;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (request, response) => {
  const {id} = request.params;
  response.send(`Payment methods for cart ${id}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
