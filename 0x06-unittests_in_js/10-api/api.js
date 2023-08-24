const express = require('express');

const app = express();
app.use(express.json());
const port = 7865;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (request, response) => {
  const { id } = request.params;
  response.send(`Payment methods for cart ${id}`);
});

app.post('/login', (request, response) => {
  let { userName } = request.body;
  response.set('Content-Type', 'text/plain');
  response.send(`Welcome ${userName}`);
});

app.get('/available_payments', (request, response) => {
  response.set('Content-Type', 'application/json');
  response.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
