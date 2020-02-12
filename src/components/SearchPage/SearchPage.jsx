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
    favorite = (event, recipe) => {
        console.log('you clicked the botton to add this recipe:', recipe)
        this.props.dispatch({
            type: 'SAVE_RECIPE',
            payload: recipe
        })
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
            <ul>
            {this.props.reduxStore.searchReducer.map(recipe =>
            <li>
                    <h1>{recipe.recipe.label}</h1>
                    <a  href={recipe.recipe.url}>View the entire recipe on {recipe.recipe.source}!</a>
                    <button onClick={(event) => this.favorite(event, recipe.recipe)}>SAVE TO FAVORITES</button>
                    <img src={recipe.recipe.image} alt="The first image!"></img>
                    <ul>
                    {recipe.recipe.ingredientLines.map(item =>
                    <li>
                        <p>{item}</p>
                    </li>
                       
                        )}
                    </ul>
                    
            </li>
                
                )}
            </ul>
        
            {/* <h1>{this.props.reduxStore.searchReducer[1].recipe.label}</h1>
            <img src={this.props.reduxStore.searchReducer[1].recipe.image} alt="The first image!"></img>
            {JSON.stringify(this.props.reduxStore.searchReducer[1].recipe.ingredientLines)} */}
            </div>
        )
    }

};

const mapStateToProps = (reduxStore) => ({
    reduxStore
  })

export default connect(mapStateToProps)(Search);
