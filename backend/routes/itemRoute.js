import express from 'express';
import GetItem from '../controller/itemController.js';

const router = express.Router();

router.get('/item', GetItem);

export default router;
