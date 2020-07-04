import React, { Component } from 'react'
import SearchBox from './SearchBox'
import FilterOptions from './FilterOptions'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <SearchBox
                    searchTerm={this.props.searchTerm}
                    handleUpdate={this.props.handleUpdate} 
                />
                <FilterOptions 
                    filterOption={this.props.filterOption}
                    handleFilterChange={this.props.handleFilterChange}
                />
            </div>
        )
    }
}
