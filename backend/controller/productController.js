import Products from '../model/productModel.js';

const GetProduct = async (req, res) => {
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
}

export default GetProduct;
