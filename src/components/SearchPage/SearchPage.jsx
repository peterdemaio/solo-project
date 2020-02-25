import React, { Component } from 'react';
import { connect } from 'react-redux'
import SearchResults from '../SearchResults/SearchResults.jsx'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'
import Preferences from '../UserPreferences/UserPreferences'
import { PacmanLoader } from 'react-spinners';

class Search extends Component {

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
        let preferencesArray = []
        this.props.reduxStore.preferencesMaster.map(preference => {
                if (preference.status === true) {
                    preferencesArray.push(preference)
                }
        })
        this.props.dispatch({
            type: 'SEARCH',
            payload: {
                query: this.state.queryText,
                preferences: preferencesArray
            }
        })
    }

    render() {
        return (
            <div className="container">
                <Preferences className="preferences"/>
                <br></br>
                <Input placeholder="Search for a recipe" value={this.state.queryText} onChange={(event) => this.handleSearch(event)}></Input>
                <Button className="button" variant="contained" onClick={this.handleClick}>SEARCH</Button>
                { this.props.reduxStore.spinner === true ? 
                <div className='loading'>
                    <p>LOADING nom, nom, nom</p>
                <PacmanLoader
                    color={'#c7a600 '}
                    loading={true}
                    width={1000}
                />
            </div>
                : <SearchResults /> }
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Search);
