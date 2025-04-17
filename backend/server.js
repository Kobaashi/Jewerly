import express from 'express';
import mongoose from 'mongoose';
import itemRoute from './routes/itemRoute.js';
import productRoute from './routes/productRoute.js';
import orderRoute from './routes/orderRoute.js';
import ordersRoute from './routes/ordersRoute.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const mongodb = process.env.MONGODB_URI;

mongoose
  .connect(mongodb)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Errot connect to MongoDB', err));
  app.use(cors());
  app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send( "Server is working");
});

app.use('/api', itemRoute);

app.use('/api', productRoute);

app.use('/api', orderRoute);

app.use('/api', ordersRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
