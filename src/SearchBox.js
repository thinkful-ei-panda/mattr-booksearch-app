import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBox extends Component {
  render() {
    return (
      <form className="SearchBox">
        <FontAwesomeIcon icon={faSearch} />
        <label htmlFor="filter_all">
        <input 
        placeholder="henry" 
        value={this.props.searchTerm}
        onChange={e => this.props.handleUpdate(e.target.value)}
         />Search
         </label>
      </form>   
    );
  }
}

export default SearchBox;