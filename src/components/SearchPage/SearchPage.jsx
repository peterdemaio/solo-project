import React, { Component} from 'react';
import { connect } from 'react-redux'

class Search extends Component {


    componentDidMount() {
        console.log(this.props.reduxStore.user.id)
        this.props.dispatch({
            type: 'GET_USER_PREFERENCES',
            payload: this.props.reduxStore.user
        })
    }

    state = {
        queryText: '',
    }

    handleSearch = (event) => {
        this.setState({
            queryText: event.target.value
        })
        console.log(this.state.queryText)
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'SEARCH',
            payload: {query: this.state.queryText,
                    preferences: this.props.reduxStore.preferencesMaster.userPreferences
            }
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

const mapStateToProps = (reduxStore) => ({
    reduxStore
  })

export default connect(mapStateToProps)(Search);
