import express from 'express';
import mongoose from 'mongoose';
import fetch from './controller/orderController.js';
import Item from './model/itemModel.js';
import Products from './model/productModel.js';
import cors from 'cors';

const app = express();
const PORT = 5000;
const mongodb = "mongodb+srv://Koba_Yashy:GodSlayer@cluster0.s4qdc.mongodb.net/Jewerly?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongodb)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Errot connect to MongoDB', err));
  app.use(cors());

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

app.post('/item', async (req, res) => {
  try {
    const newItem = new Item({
      id: 1,
      title: "Test Item",
      img: "test.jpg",
      desc: "Test description",
      category: "Test",
      price: 100
    });

    await newItem.save();
    res.json({ message: "Test item added successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
