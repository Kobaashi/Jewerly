import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true }
  }
);

const orderSchemaForMainOrder = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  orders: [orderSchema]
});

const OrderModel = mongoose.model('Order', orderSchemaForMainOrder, 'orders');

export default OrderModel;
