import React from 'react'
// import { Component } from 'react'

import Filter from './Filter'
import FilteredFruitList from './FilteredFruitList.js'

// class FruitBasket extends Component {
function FruitBasket(props) {
  // constructor() {
  //   super()

    // this.state = {
    //   filters: [],
    //   selectedFilter: null
    // }

    //this.handleFilterChange = this.handleFilterChange.bind(this)
  //}

  // handleFilterChange(e) {
  //   console.log('new filter: ', e.target.value)
  //   this.setState({ selectedFilter: e.target.value })
  // }

  //render() {
    return (
      <div className="fruit-basket">
        <Filter
          handleChange={props.updateFilterCallback}
          filters={props.filters} />

        <FilteredFruitList
          fruit={props.fruit}
          filter={props.currentFilter} />
      </div>
    )
}

FruitBasket.defaultProps={
  fruit: ['pineapple'], //defaultProps for fruit is an array containing an element
  filters: ['other'], //defaultProps for filters is an array containing an element
  currentFilter: null, //defaultProps for selectedFilter is null
  updateFilterCallback: (event) => console.log(event)
}

// fruit={this.state.fruit}
// filters={this.state.filters}
// selectedFilter={this.state.selectedFilter}
// updateFilterCallback={this.handleFilterChange.bind(this)}

export default FruitBasket
