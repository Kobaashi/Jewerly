import React, { Component } from 'react';
import Header from '../components/Header';
import Items from '../components/Items';
import Categories from '../components/Categories';
import ShowFullItem from '../components/ShowFullItem';
import Tabs from '../components/Tabs';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [],
      showFullItem: false,
      fullItem: {}
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  componentDidMount() {
    this.readFromFile();
    this.loadOrdersFromLocalStorage();
  }

  readFromFile() {
    fetch("http://localhost:5000/item")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Fetched data:', data);  // Додайте це для перевірки
    this.setItems(data);
  })
  .catch(error => console.error('Error reading file:', error));

  }

  setItems(newItems) {
    this.setState({
      items: newItems,
      currentItems: newItems
    });
  }

  onShowItem(items) {
    this.setState(prevState => ({
      fullItem: items,
      showFullItem: !prevState.showFullItem
    }));
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items});
      return;
    }
    this.setState({
      currentItems: this.state.items.filter(item => item.category === category)
    });
  }

  addToOrder(item) {
    const isInArray = this.state.orders.some(order => order.id === item.id);
    if (!isInArray) {
      const newOrders = [...this.state.orders, item];
      this.setState({ orders: newOrders }, () => {
        localStorage.setItem('orders', JSON.stringify(newOrders));
      });
    }
  }

  deleteOrder(id) {
    const newOrders = this.state.orders.filter(order => order.id !== id);
    this.setState({
      orders: newOrders
    }, () => {
      localStorage.setItem('orders', JSON.stringify(newOrders));
    });
  }

  loadOrdersFromLocalStorage() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    this.setState({ orders });
  }

  render() {
    return (
      <div className="wrapper">
          <Tabs orders={this.state.orders} onDelete={this.deleteOrder} />
          <Header/>
          <Categories chooseCategory={this.chooseCategory} />
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
          {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} items={this.state.fullItem} />}
      </div>
    );
  }
}

export default Main;
