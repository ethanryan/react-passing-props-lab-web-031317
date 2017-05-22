import React from 'react'
// import { Component } from 'react'

//class FilteredFruitList extends Component {
function FilteredFruitList(props) {

  // componentWillMount() {
  //   fetch('/api/fruit')
  //     .then(res => res.json())
  //     .then(fruit => this.setState({ items: fruit}))
  // }

    const list = !props.filter ? props.fruit :
      props.fruit.filter(fruit => fruit.fruit_type === props.filter)

    return (
      <ul className="fruit-list">
        {list.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
      </ul>
    )
}

FilteredFruitList.defaultProps={
  fruit: ['pineapple'], //defaultProps for fruit is an array with some elements
  filter: [null] //defaultProps for filter is an array with some elements
}

export default FilteredFruitList
