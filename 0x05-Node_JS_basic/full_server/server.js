import attach_routes from './routes/index'

const express = require('express');

const app = express();
const port = 1245;

attach_routes(app);

app.listen(port, () => {
  console.log(`Listening port on ${port}`);
});

export default app;
