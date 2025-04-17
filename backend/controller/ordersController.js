import Order from '../model/order.js';

const GetOrder = async (req, res) => {
  try {
        const orders = await Order.find();

        console.log('Fetched items:', orders.length > 0 ? orders : 'No items found');

        if (orders.length === 0) {
          return res.status(404).json({ message: 'No items found' });
        }

        res.json(orders);
      } catch (err) {
        console.error('❌ Error fetching items:', err);
        res.status(500).json({ error: err.message });
      }
}

export default GetOrder;
