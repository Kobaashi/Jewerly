import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  img: { type: String, required: true },
  desc: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true }
});

export default mongoose.model('Item', ItemSchema, 'items');
