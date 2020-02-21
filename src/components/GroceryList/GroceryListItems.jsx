import React, { Component } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  Icon
} from "@material-ui/core"
import RootRef from "@material-ui/core/RootRef";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneIcon from '@material-ui/icons/Done'
import './GroceryListItems.css'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

const getItemStyle = (isDragging, draggableStyle) => ({
  ...draggableStyle,
  ...(isDragging && {
    background: "rgb(50, 115, 220)"
  }),
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'white',
});

class groceryListItems extends Component {

  state = {
    items: this.props.reduxStore.groceryList
  }

  onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.props.reduxStore.groceryList,
      result.source.index,
      result.destination.index
    );

    this.props.dispatch({
      type: 'SET_GROCERY_LIST',
      payload: items
    });
  }

  delete = (event, food) => {
    this.props.dispatch({
      type: 'DELETE_GROCERY_ITEM',
      payload: {
        id: food.id,
        user_id: this.props.reduxStore.user.id
      }
    })
  }

  edit = (event, food) => {
    this.props.dispatch({
      type: 'EDIT_GROCERY_ITEM',
      payload: food
    })
  }

  render() {
    return (
      <div >
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <RootRef rootRef={provided.innerRef}>
                <List style={getListStyle(snapshot.isDraggingOver)} className="groceryList">
                  {this.props.reduxStore.groceryList.map((food, index) => (
                    <Draggable key={food.id} draggableId={food.id.toString()} index={index}>
                      {(provided, snapshot) => (
                        <ListItem
                        className="groceryListItem"
                          ContainerComponent="li"
                          ContainerProps={{ ref: provided.innerRef }}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}

                        >
                          <ListItemText
                            primary={food.item} 
                            className={food.checked === true ? "checked" : "notChecked"}
                          />
                          <ListItemSecondaryAction>
                            <IconButton>
                              <DoneIcon onClick={(event) => this.edit(event, food)} />
                            </IconButton>
                            <IconButton onClick={(event) => this.delete(event, food)}>
                              <DeleteIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </List>
              </RootRef>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    )
  }
};

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapReduxStateToProps)(groceryListItems);
