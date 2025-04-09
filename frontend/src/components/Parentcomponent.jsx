import React, { useState } from 'react';
import Tabs from './Tabs';

const ParentComponent = () => {
  const [orders, setOrders] = useState([
    { id: 1, title: 'Item 1', price: 100 },
    { id: 2, title: 'Item 2', price: 200 },
    { id: 3, title: 'Item 3', price: 300 }
  ]);

  const handleDelete = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <div>
      <h1>My Orders</h1>
      <Tabs orders={orders} setOrders={setOrders} onDelete={handleDelete} />
    </div>
  );
};

export default ParentComponent;
