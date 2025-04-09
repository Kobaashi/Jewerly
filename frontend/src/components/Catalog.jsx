import React, { useState, useEffect } from 'react';
import Header from './Header';
import Tabs from './Tabs';
import Categories from './Categories';
import Items from './Items';
import ShowFullItem from './ShowFullItem';
import Footer from './Footer';

const Catalog = () => {
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [items, setItems] = useState([]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  useEffect(() => {
    readFromFile();
    loadOrdersFromLocalStorage();
  }, []);

  const readFromFile = () => {
    fetch("http://localhost:5000/product")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setItems(data);
        setCurrentItems(data);
      })
      .catch(error => console.error('Error reading file:', error));
  };

  const loadOrdersFromLocalStorage = () => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  };

  const addToOrder = (item) => {
    const isInArray = orders.some(order => order.id === item.id);
    if (!isInArray) {
      setOrders(prevOrders => [...prevOrders, item]);
    }
  };

  const deleteOrder = (id) => {
    setOrders(prevOrders => prevOrders.filter(order => order.id !== id));
  };

  const chooseCategory = (category) => {
    if (category === 'all') {
      setCurrentItems(items);
    } else {
      setCurrentItems(items.filter(item => item.category === category));
    }
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(prev => !prev);
  };

  return (
    <div className='wrapper-catalog'>
      <section className='catalog'>
        <Tabs orders={orders} onDelete={deleteOrder} />
        <Header />
        <Categories chooseCategory={chooseCategory} />
        <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} />
        {showFullItem && <ShowFullItem onShowItem={onShowItem} onAdd={addToOrder} items={fullItem} />}
        <Footer />
      </section>
    </div>
  );
};

export default Catalog;
