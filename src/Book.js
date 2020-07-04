import React, { Component } from 'react';


class Book extends Component {
  render() {

    return (
      <div className="ListItem">
            {this.props.title}
            {this.props.size}
          </div>
    );
  }
}

export default Book;