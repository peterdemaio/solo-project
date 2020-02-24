import React, { Component } from 'react';
import { connect } from 'react-redux'
import GroceryListItems from '../GroceryList/GroceryListItems'
import './GroceryList.css'


  class groceryListPage extends Component {
    render() {

      // <form onSubmit= {this.handleClick}>
      //           <label> Add Item </label>
      //           <input value ={this.state.newItem} onChange = {(event) => this.handleChangeFor(event)}/>
      //           <input type= "submit" onClick = {this.handleClick}/>
      //       </form>
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
  