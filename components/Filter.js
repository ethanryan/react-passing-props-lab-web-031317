import React from 'react'
// import { Component } from 'react'

//class Filter extends Component {
function Filter(props) {

  // componentWillMount() {
  //   this.fetchFilters()
  // }

  // fetchFilters() {
  //   fetch('/api/fruit_types')
  //     .then(res => res.json())
  //     // .then(filters => this.setState({filters: filters}))
  //     .then(filters => this.props.setFilters(filters) )
  // }

    return (
      <select onChange={props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {props.filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    )
}

Filter.defaultProps={
  handleChange: (event) => console.log(event), //defaultProp for handleChange is a function that logs whatever gets passed into it
  filters: [null, 'berries', 'other'] //defaultProp for filters is an array with some options
}

export default Filter
