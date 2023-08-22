import app from './routes/index';

const port = 1245;
app.listen(port, () => {
  console.log(`Listening port on ${port}`);
});

export default app;
