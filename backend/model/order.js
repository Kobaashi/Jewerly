import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true }
  },
  { timestamps: true },
);

const Order = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  orders: [orderSchema]
});

const OrderModel = mongoose.model('Order', orderSchema);

export default OrderModel;
