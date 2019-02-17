import express from 'express';

import bodyParser from 'body-parser';

// Routes
import mealRoutes from './routes/meal.route';

const app = express();

app.use(bodyParser.json());

const PORT = 3434;

app.get('/', (req, res) => {
  return res.send('Up and Running');
});

app.use('/api/v1/meals', mealRoutes);

app.listen(PORT, () => {
  console.log(`server is listening on port:${PORT}`);
});
