import express from 'express';

import bodyParser from 'body-parser';

// Routes
import mealRoutes from './routes/meal.route';
import menuRoutes from './routes/menu.route';

const app = express();

app.use(bodyParser.json());

const PORT = 3434;

app.get('/', (req, res) => {
  return res.send('Up and Running');
});

//handle
app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menu', menuRoutes);

app.listen(PORT, () => {
  console.log(`server is listening on port:${PORT}`);
});
