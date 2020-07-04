import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBox extends Component {

    handleSubmit(e) {
        e.preventDefault();
        const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`;
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(url, requestOptions)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          results: data,
          error: null
        });
        // console.log(this.state.results)
        // console.log(data.items.map(item => item.volumeInfo.title))
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

  }

  render() {
    return (
      <form className="SearchBox">
        
        <input 
        placeholder="Jordan" 
        value={this.props.searchTerm}
        onChange={e => this.props.handleUpdate(e.target.value)}
         />
         <button type="submit" >
         <FontAwesomeIcon icon={faSearch} />
         </button>
      </form>   
    );
  }
}

export default SearchBox;