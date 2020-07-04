import React, { Component } from 'react';
import Book from './Book';
// import './bookmarkList.css';
// import Bookmark from '../bookmark/bookmark';

class BookList extends Component {
  render() {
    const books = this
          .props
          .results
          .map((bookmark, i) => <Book { ...bookmark } key={i}/>);
          // .map((bookmark, i) => <Book { ...bookmark } key={i}/>);
    return (
      <div className="bookmarkList">
        {books}
      </div>
    );
  }
}

BookList.defaultProps = {
  results: []
};

export default BookList;