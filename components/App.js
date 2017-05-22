import React, { Component } from 'react'

import FruitBasket from './FruitBasket'

class App extends Component {
  constructor() {
    super()
    this.state = {
      fruit: [], //from error
      //items: [], //from FilteredFruitList
      filters: [], //from Filter
      //selectedFilter: null //from FruitBasket -- made this currentFilter throughout
      currentFilter: null //from FruitBasket
    }
  }

  componentWillMount() {
    this.fetchFilters()
    this.fetchFruit()
  }

  fetchFruit() {
    fetch('/api/fruit')
    .then(res => res.json())
    .then(fruit => this.setState({ fruit: fruit}))
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}))
  }

  handleFilterChange(e) {
    // -- making this updateFilterCallback as props name below for tests
    console.log('new filter: ', e.target.value)
    this.setState({ currentFilter: e.target.value })
  }

  render() {
    return (
      <div>
        <FruitBasket
          fruit={this.state.fruit}
          filters={this.state.filters}
          currentFilter={this.state.currentFilter}
          updateFilterCallback={this.handleFilterChange.bind(this)}
        />
      </div>
    )
  }
}

export default App
