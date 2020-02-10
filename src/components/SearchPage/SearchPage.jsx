import React, { Component} from 'react';

class Search extends Component {

    // Get preferences upon page load and keep them in state

    state = {
        queryText: '',
        preferences: ''
    }

    handleSearch = (event) => {
        this.setState({
            ...this.state,
            queryText: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'SEARCH',
            payload: this.state.queryText
        })
    }
    render() {
        return (
            <div>
            <input placeholder="SEARCH" value={this.state.queryText} onChange={(event) => this.handleSearch(event)}></input> 
            <button onClick = {this.handleClick} > SEARCH</button>
            </div>
        )
    }

};

export default Search;
