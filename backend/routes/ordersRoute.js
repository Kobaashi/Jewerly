import express from 'express';
import GetOrder from '../controller/ordersController.js';

const router = express.Router();

router.get('/orders', GetOrder);

export default router;
