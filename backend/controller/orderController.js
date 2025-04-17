import { format } from 'date-fns';
import OrderModel from '../model/order.js';

const PostOrder = async (req, res) => {
  try {
    const { date, orders } = req.body;

    console.log('Received data:', req.body);

    const formattedDate = format(new Date(), 'yyyy-MM-dd\'T\'HH:mm:ss');

    const newOrder = new OrderModel({
      date: formattedDate || new Date(),
      orders: orders.map(item => ({
        name: item.name,
        price: item.price,
      }))
    });

    await newOrder.save();
    res.json({ success: true, message: "Orders added successfully!" });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: err.message });
  }
}

export default PostOrder;
