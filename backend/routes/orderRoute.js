import express from 'express';
import PostOrder from '../controller/orderController.js';

const router = express.Router();

router.post('/order', PostOrder);

export default router;
