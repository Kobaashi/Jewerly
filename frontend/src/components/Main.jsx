import React, { useEffect, useState } from 'react';
import Header from './Header';
import Items from './Items';
import Categories from './Categories';
import ShowFullItem from './ShowFullItem';
import Tabs from './Tabs';

const Main = () => {
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  useEffect(() => {
    readFromFile();
    loadOrdersFromLocalStorage();
  }, []);

  const readFromFile = () => {
    fetch("http://localhost:5000/api/item")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setItems(data);
        setCurrentItems(data);
      })
      .catch(error => console.error('Error reading file:', error));
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(prev => !prev);
  };

  const chooseCategory = (category) => {
    if (category === 'all') {
      setCurrentItems(items);
    } else {
      setCurrentItems(items.filter(item => item.category === category));
    }
  };

  const addToOrder = (item) => {
    const isInArray = orders.some(order => order.id === item.id);
    if (!isInArray) {
      const newOrders = [...orders, item];
      setOrders(newOrders);
      localStorage.setItem('orders', JSON.stringify(newOrders));
    }
  };

  const deleteOrder = (id) => {
    const newOrders = orders.filter(order => order.id !== id);
    setOrders(newOrders);
    localStorage.setItem('orders', JSON.stringify(newOrders));
  };

  const loadOrdersFromLocalStorage = () => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  };

  return (
    <div className="wrapper">
      <Tabs orders={orders} onDelete={deleteOrder} setOrders={setOrders} />
      <Header />
      <Categories chooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} />
      {showFullItem && <ShowFullItem onShowItem={onShowItem} onAdd={addToOrder} items={fullItem} />}
    </div>
  );
};

export default Main;
