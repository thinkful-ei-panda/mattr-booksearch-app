import React, { Component } from 'react';


class FilterOptions extends Component {
  render() {

    const { filterOption } = this.props;

    return (
      <div className="FilterOptions">
          <label htmlFor="filter_all">
            <input 
            type="radio" 
            value="All" 
            id="filter_all" 
            name="filter" 
            checked={filterOption ==="All"}
            onChange={e => this.props.handleFilterChange(e.target.value)}
            />
          All
          </label>
          <label htmlFor="filter_type">
            <input 
            type="radio" 
            value="Type" 
            id="filter_type" 
            name="filter" 
            checked={filterOption ==="Type"}
            onChange={e => this.props.handleFilterChange(e.target.value)}
            />
          Type
          </label>
      </div>
    );
  }
}

export default FilterOptions;