import React from 'react';
import Item from './Item';

const Items = ({ items, onShowItem, onAdd }) => {
  return (
    <main>
      {items.map(el => (
        <Item
          key={el.id}
          items={el}
          onShowItem={onShowItem}
          onAdd={onAdd}
        />
      ))}
    </main>
  );
};

export default Items;
