import express from 'express';
import mongoose from 'mongoose';
import itemRoute from './routes/itemRoute.js';
import productRoute from './routes/productRoute.js';
import orderRoute from './routes/orderRoute.js';
import ordersRoute from './routes/ordersRoute.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;
const mongodb = "mongodb+srv://Koba_Yashy:GodSlayer@cluster0.s4qdc.mongodb.net/Jewerly?retryWrites=true&w=majority&appName=Cluster0";

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
