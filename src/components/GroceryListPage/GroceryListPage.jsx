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
    this.setState ({
      newItem: ''
    })
}
  render() {
    return (
      <div className="submitGrocery">
        <br></br>
        <h2>ADD NEW ITEM:</h2>
          <input value={this.state.newItem} onChange={(event) => this.handleChangeFor(event)} />
          <Button onClick={this.handleClick} color="primary" variant="contained"> ADD ITEM</Button>
          <h2>Grocery List</h2>
        <div className="groceryList">
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
