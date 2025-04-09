import React from 'react';

const Item = ({ items, onShowItem, onAdd }) => {
  return (
    <div className='item'>
      <img src={items.img} alt={items.title} onClick={() => onShowItem(items)} />
      <h2>{items.title}</h2>
      <p>{items.desc}</p>
      <b>{items.price}₴</b>
      <div className='add-to-card' onClick={() => onAdd(items)}>+</div>
    </div>
  );
};

export default Item;
