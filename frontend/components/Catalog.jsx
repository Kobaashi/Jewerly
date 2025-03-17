import React, { Component } from 'react'
import Header from './Header'
import Tabs from './Tabs'
import Categories from './Categories';
import Items from './Items';
import ShowFullItem from './ShowFullItem';
import Footer from './Footer'

export class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      products: [],
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
    fetch("http://localhost:5000/product")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setItems(data);
      })
      .catch(error => console.error('Error reading file:', error));
  }

  setItems(newProduct) {
    this.setState({
      items: newProduct,
      currentItems: newProduct
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

  deleteOrder(id) {
    this.setState({
      orders: this.state.orders.filter(order => order.id !== id)
    });
  }

  addToOrder(item) {
    const isInArray = this.state.orders.some(order => order.id === item.id);
    if (!isInArray) {
      this.setState(prevState => ({
        orders: [...prevState.orders, item]
      }));
    }
  }

  loadOrdersFromLocalStorage() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    this.setState({ orders });
  }

  render() {
    return (
      <div className='wrapper-catalog'>
          <section className='catalog'>
            <Tabs orders={this.state.orders} onDelete={this.deleteOrder} />
            <Header/>
            <Categories chooseCategory={this.chooseCategory} />
            <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
            {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} items={this.state.fullItem} />}
            <Footer />
          </section>
      </div>

    )
  }
}

export default Catalog
