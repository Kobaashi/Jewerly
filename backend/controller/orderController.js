import { format } from 'date-fns';
import OrderModel from '../model/order.js';

const PostOrder = async (req, res) => {
  try {
    const { orders } = req.body;

    console.log('Received data:', req.body);

    if (!orders || !Array.isArray(orders) || orders.length === 0) {
      return res.status(400).json({ error: 'Orders array is required and must not be empty.' });
    }

    const formattedDate = format(new Date(), 'yyyy-MM-dd\'T\'HH:mm:ss');

    const newOrder = new OrderModel({
      date: formattedDate,
      orders: orders.map(item => ({
        name: item.name,
        price: item.price,
      }))
    });

    await newOrder.save();
    console.log('Order saved:', newOrder);

    res.json({ success: true, message: "Orders added successfully!" });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: err.message });
  }
}

export default PostOrder;
