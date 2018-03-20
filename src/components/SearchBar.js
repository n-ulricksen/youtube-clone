import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        // Keep track of current term contained in searchbar input
        this.state = {
            term: ''
        };
    }

    // Function to set SearchBar state with updated term and call
    // callback function in index.js with that term
    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

    render() {
        return(
            <div className="search-bar">
                {/* // pass the value in searchbar as 'term' to onInputChange function */}
                <input                
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} 
                    type="text" />
            </div>
        );
    }
}

export default SearchBar;