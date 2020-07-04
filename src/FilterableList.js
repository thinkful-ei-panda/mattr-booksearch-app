import React, { Component } from 'react';
import Book from './Book';

class FilterableList extends Component {
  render() {
    const { searchTerm, filterOption } = this.props;
    const list = this.props.results
        .filter(obj => obj.name.includes(searchTerm)
              && (filterOption === 'All' || obj.status === filterOption))
        .map((file, key) => <Book {...file} key={key} title={this.obj.volumeInfo.title} />);
    return (
      <div className="FilterableList">
        {list}
      </div>
    );
  }
}

FilterableList.defaultProps = {
  files: []
};

export default FilterableList;