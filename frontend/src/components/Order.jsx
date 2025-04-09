import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Order = ({ items, onDelete }) => {
  return (
    <div className='item'>
      <img src={items.img} alt={items.title} />
      <h2>{items.title}</h2>
      <b>{items.price}₴</b>
      <FaTrash className='delete-icon' onClick={() => onDelete(items.id)} />
    </div>
  );
};

export default Order;
