
const fetch = async (req, res) => {
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
}

export default fetch;
