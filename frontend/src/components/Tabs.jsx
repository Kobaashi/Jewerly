import React, { useState } from 'react';
import { MdOutlineShoppingBag } from 'react-icons/md';
import Order from './Order';
import { Link } from 'react-router-dom';

function Tabs({ orders, onDelete, setOrders }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [loginsuccesfully, setLoginsuccesfully] = useState(true);
  const [user, setUser] = useState(true)

  const handleBuy = () => {
    if (loginsuccesfully === true) {
      const currentOrders = [...orders];
      saveOrdersToServer(currentOrders);
      alert('Дякую за покупку!');
      onDeleteAll();
    } else {
      alert('Будь ласка, увійдіть для покупки товарів.');
    }
  };

  const check = () => {
    setUser(prevUser => !prevUser);
    setLoginsuccesfully(prevLogin => !prevLogin);
  };

  const saveOrdersToServer = async (currentOrders) => {
    const currentDate = new Date().toLocaleString();
    const orderData = currentOrders.map((order) => ({
      name: order.title,
      price: order.price,
    }));

    const dataToSave = {
      date: currentDate,
      orders: orderData,
    };

    let existingData = JSON.parse(localStorage.getItem('orders')) || [];
    existingData.push(dataToSave);

    localStorage.setItem('orders', JSON.stringify(existingData));

    const response = await fetch('http://localhost:5000/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSave),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Server Error:', errorText);
      return;
    }
  }

  const onDeleteAll = () => {
    setOrders([]);
  };

  const showOrders = () => {
    let sum = 0;
    orders.forEach((el) => (sum += el.price));

    return (
      <div>
        {orders.map((el, index) => (
          <Order onDelete={onDelete} key={index} items={el} />
        ))}
        <p className='sum'>Сума: {new Intl.NumberFormat().format(sum)}₴</p>
        <button className='buy' onClick={handleBuy}>Купити</button>
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className='empty'>
        <h2>Товарів немає</h2>
      </div>
    );
  };

  return (
    <header>
      <span>
        <Link className='logo' to='/'>Jewelry</Link>
      </span>
      <ul className='nav'>
        <li>
          <Link className='catalog' to='/catalog'>Каталог</Link>
        </li>
        <li>
          <Link className='aboutus' to='/about-us'>Про нас</Link>
        </li>
        <li>
          <Link className='profile' to='/profile'>Профіль</Link>
        </li>
        {loginsuccesfully ? (
          <button className='log-in' onClick={check}><Link className='login' to="/">Вийти</Link></button>
        ) : (
          <button className='log-in'><Link className='login' to="/login">Увійти</Link></button>
        )}
        <MdOutlineShoppingBag
          onClick={() => setCartOpen((prevCartOpen) => !prevCartOpen)}
          className={`shop-cart-btn ${cartOpen && 'active'}`}
        />

        {cartOpen && (
          <div className='shop-cart'>
            {orders && orders.length > 0 ? showOrders() : showNothing()}
          </div>
        )}
      </ul>
    </header>
  );
}

export default Tabs;
