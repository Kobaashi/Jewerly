import React, { useEffect, useState } from 'react';
import Tabs from './Tabs';

const Profile = ({ loginsuccesfully, setLoginsuccesfully, user, setUser }) => {
  const [savedOrders, setSavedOrders] = useState([]);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    setSavedOrders(orders);
  }, []);

  const check = () => {
    setUser(prevUser => !prevUser);
    setLoginsuccesfully(prevLogin => !prevLogin);
  };

  return (
    <div className='wrapper-profile'>
      <Tabs />
      {check ? (
        <>
          <h2>Ваші замовлення</h2>
          {savedOrders.length === 0 ? (
            <p>Немає збережених замовлень.</p>
          ) : (
            <ul>
              {savedOrders.map((order, index) => (
                <li key={index}>
                  <p>Дата: {order.date}</p>
                  <ul>
                    {order.orders && order.orders.length > 0 ? (
                      order.orders.map((item, idx) => (
                        <li key={idx}>
                          {item.name} - {item.price}₴
                        </li>
                      ))
                    ) : (
                      <p>Замовлення порожнє.</p>
                    )}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <div>
          <h2>Будь ласка увійдіть в аккаунт</h2>
        </div>
      )}
    </div>
  );
};

export default Profile;