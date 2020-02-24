import React, { Component } from 'react';
import { connect } from 'react-redux'
import GroceryListItems from '../GroceryList/GroceryListItems'
import './GroceryList.css'
import Button from '@material-ui/core/Button';


class groceryListPage extends Component {

  state = {
    newItem: ''
  }
  handleChangeFor = (event) => {
    console.log(event.target.value, this.props.reduxStore.user.id)
    this.setState({
      newItem: event.target.value 
    })
}

handleClick = (event) => {
    event.preventDefault()
    this.props.dispatch({
        type: 'POST_GROCERY_ITEM',
        payload: {
          newItem: this.state.newItem,
          user: this.props.reduxStore.user.id
        }
    })
}
  render() {
    return (
      <div className="submitGrocery">
        <br></br>
        <h3>ADD NEW ITEM:</h3>
          <input value={this.state.newItem} onChange={(event) => this.handleChangeFor(event)} />
          <Button onClick={this.handleClick} color="primary" variant="contained"> ADD ITEM</Button>
        <div className="groceryList">
          <h2>Grocery List</h2>
          <GroceryListItems />
        </div>
      </div>
    )
  }
};

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapReduxStateToProps)(groceryListPage);
