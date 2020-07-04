import React, { Component } from 'react'
import SearchBox from './SearchBox'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <SearchBox
                    searchTerm={this.props.searchTerm}
                    handleUpdate={this.props.handleUpdate} 
                />
              
            </div>
        )
    }
}
