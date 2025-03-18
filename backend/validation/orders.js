import { body } from 'express-validator';

const orderValidation = [
  body('date').isISO8601().toDate(),
  body('orders').isArray().withMessage('Orders must be an array'),
  body('orders.*.product').isString().withMessage('Product must be a string'),
  body('orders.*.quantity').isInt({ min: 1 }).withMessage('Quantity must be an integer greater than 0')
];

export default orderValidation;
