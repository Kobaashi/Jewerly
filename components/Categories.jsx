import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories : [
        {
          key: 'all',
          name: 'Все'
        },
        {
          key: 'rings',
          name: 'Каблучки'
        },
        {
          key: 'earrings',
          name: 'Сережки'
        },
        {
          key: 'bracletes',
          name: 'Браслети'
        },
        {
          key: 'watchs',
          name: 'Годиники'
        },
        {
          key: 'necklace',
          name: 'Підвіски'
        },
      ]
    }
  }
    render() {
      return (
        <div className='categories'> {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)} >{el.name}</div>
        ))} </div>
      )
    }
}

export default Categories