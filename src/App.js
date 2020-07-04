import React from 'react';
import './App.css';
import Header from './Header'
import SearchBar from './SearchBar';
import BookList from './BookList'

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'Jordan',
      results: []
    };
  }


  componentDidMount() {
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

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }

render(){
  return (
    <div className="App">
      <Header />
      <SearchBar
      searchTerm={this.state.searchTerm}
      filterOption={this.state.filterOption}
      handleUpdate={term=>this.updateSearchTerm(term)}
      handleFilterChange={option => this.updateFilterOption(option)}
      />
      
      <BookList
      results={this.state.results} 
      />

      {/* <FilterableList 
        results={this.state.results}
        searchTerm={this.state.searchTerm}
        // filterOption={this.state.filterOption} 
        /> */}

    </div>

    );
  }
}

export default App;
