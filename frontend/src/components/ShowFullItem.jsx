import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
            <img src={this.props.items.img} onClick={() => this.props.onShowItem(this.props.items)} />
            <h2>{this.props.items.title}</h2>
            <p>{this.props.items.desc}</p>
            <b>{this.props.items.price}₴</b>
            <div className='add-to-card' onClick={() => this.props.onAdd(this.props.items)} >+</div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem
