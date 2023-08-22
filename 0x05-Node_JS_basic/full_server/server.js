import attachRoutes from './routes/index';

const express = require('express');

const app = express();
const port = 1245;

attachRoutes(app);

app.listen(port, () => {
  console.log(`Listening port on ${port}`);
});

export default app;
