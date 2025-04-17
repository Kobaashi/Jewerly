import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Tabs from './Tabs';

const Profile = ({ loginsuccesfully, setLoginsuccesfully, user, setUser }) => {
  const [savedOrders, setSavedOrders] = useState([]);
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    setSavedOrders(orders);
    getOrder();
  }, []);

  const check = () => {
    setUser(prevUser => !prevUser);
    setLoginsuccesfully(prevLogin => !prevLogin);
    getOrder();
  };

  const getOrder = () => {
    fetch("http://localhost:5000/api/orders")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched orders:", data);
        setItems(data);
        setCurrentItems(data);
      })
      .catch(error => console.error('Error reading file:', error));
  };

  return (
    <div className='wrapper-profile'>
      <Tabs />
      <h1>Ваші замовлення:</h1>
      <div className='all-orders'>
        {currentItems.length > 0 ? (
          currentItems.map((order, index) => (
            <div key={index} className='order'>
              <h2>Дата: {format(new Date(order.date), 'dd-MM-yyyy HH:mm')}</h2>
              <ul>
                {order.orders.map((item, i) => (
                  <li key={i}>{item.name} — {item.price}₴</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>Немає збережених замовлень.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
