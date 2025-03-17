import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={this.props.items.img}/>
        <h2>{this.props.items.title}</h2>
        <b>{this.props.items.price}₴</b>
        <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.items.id)}/>
      </div>
    )
  }
}

export default Order