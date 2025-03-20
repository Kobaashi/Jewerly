import express from 'express';
import mongoose from 'mongoose';
import fetch from './controller/orderController.js';
import Item from './model/itemModel.js';
import Products from './model/productModel.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import OrderModel from './model/order.js';
import { format } from 'date-fns';

const app = express();
const PORT = 5000;
const mongodb = process.env.mongoDB || "mongodb+srv://Koba_Yashy:GodSlayer@cluster0.s4qdc.mongodb.net/Jewerly?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongodb)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Errot connect to MongoDB', err));
  app.use(cors());
  app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send( "Server is working");
});

app.get('/item', async (req, res) => {
  try {
    const items = await Item.find();

    console.log('Fetched items:', items.length > 0 ? items : 'No items found');

    if (items.length === 0) {
      return res.status(404).json({ message: 'No items found' });
    }

    res.json(items);
  } catch (err) {
    console.error('❌ Error fetching items:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/product', async (req, res) => {
  try {
    const products = await Products.find();

    console.log('Fetched items:', products.length > 0 ? products : 'No items found');

    if (products.length === 0) {
      return res.status(404).json({ message: 'No items found' });
    }

    res.json(products);
  } catch (err) {
    console.error('❌ Error fetching items:', err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/order', async (req, res) => {
  try {
    const { date, orders } = req.body;


    console.log('Received data:', req.body);

    const formattedDate = format(new Date(), 'yyyy-MM-dd\'T\'HH:mm:ss');

    const newOrder = new OrderModel({
      date: formattedDate || new Date(),
      orders: orders.map(item => ({
        name: item.name, // Використовуємо правильні поля
        price: item.price,
      }))
    });

    // Збереження в базу даних
    await newOrder.save();
    res.json({ success: true, message: "Orders added successfully!" });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
