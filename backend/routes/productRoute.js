import express from 'express';
import GetProduct from '../controller/productController.js';

const router = express.Router();

router.get('/product', GetProduct);

export default router;
