import React from 'react';
import SearchResultsItem from '../SearchResultItem/SearchResultItem'
import { connect } from 'react-redux';

class SearchResults extends React.Component {
    render() {
        return (
            <ul className="recipeList">
                {this.props.reduxStore.searchReducer.map(recipe =>
                    <SearchResultsItem key={recipe.id} recipe={recipe} />
                )}
            </ul>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(SearchResults)