import React, { Component } from 'react';
import { connect } from 'react-redux'
import FavoritesList from '../FavoritesList/FavoritesList'


class Favorites extends Component {


  componentDidMount() {
    this.props.dispatch({
      type: 'GET_FAVORITES',
      payload: this.props.reduxStore.user.id
    })
  }

  state = {
    noteBoolean: true,
    note: ''
  }

 toggleEdit = (event) => {
    this.setState({
      ...this.state,
      noteBoolean: false
    })
 }

  setNote = (event) => {
    this.setState({
      ...this.state,
      note: event.target.value

    })
  }
 
 
  saveNote = (event, id) => {
    this.setState({
      ...this.state,
      noteBoolean: true
    })
    this.props.dispatch({
      type: 'EDIT_NOTE',
      payload: {
        note: this.state.note,
        food_id: id,
        user_id: this.props.reduxStore.user.id
      }
    })
    
  }

  render() {
    return (
      <div>
        <FavoritesList />
      </div>
    )
  }
};

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(Favorites);

