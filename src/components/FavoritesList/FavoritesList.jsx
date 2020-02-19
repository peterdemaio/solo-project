import React from 'react';
import FavoritesListItem from '../FavoritesListItem/FavoritesListItem'
import { connect } from 'react-redux';

class FavoritesList extends React.Component {
    render() {
        return (
            <ul className="recipeList">
                {this.props.reduxStore.favorites.map(recipe =>
                    <FavoritesListItem key={recipe.id} recipe={recipe} />
                )}
            </ul>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(FavoritesList)