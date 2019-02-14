import express from 'express';

const app = express();

const PORT = 3434;

app.get('/', (req, res) => {
  return res.send('Up and Running');
});

app.listen(PORT, () => {
  console.log(`server is listening on port:${PORT}`);
});
