import React, { Component } from 'react';
import { connect } from 'react-redux'
import GroceryListItems from '../GroceryList/GroceryListItems'
import './GroceryList.css'


  class groceryListPage extends Component {
    render() {
      return (
        <div className="groceryList">
          <h2>Grocery List</h2>
          <GroceryListItems />
        </div>
      )
    }
  };
  
  const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
  })
  
  export default connect(mapReduxStateToProps)(groceryListPage);
  