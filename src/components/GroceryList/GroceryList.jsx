import React, { Component } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core"
import RootRef from "@material-ui/core/RootRef";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete'

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
    })
  });
  
  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
  });

  class groceryList extends Component {

    componentDidMount() {
        this.props.dispatch({ 
            type: 'GET_GROCERY_LIST', 
            payload: this.props.reduxStore.user.id 
        })
    }

    
    constructor(props) {
      super(props);
      this.state = {
        items: this.props.reduxStore.groceryList
      };
      this.onDragEnd = this.onDragEnd.bind(this);
    }
  
  
    onDragEnd(result) {
      if (!result.destination) {
        return;
      }
      
      const items = reorder(
        this.state.items,
        result.source.index,
        result.destination.index
      );
  
      this.setState({
        items
      });
    }
  
    render() {
      return (
        <div>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <RootRef rootRef={provided.innerRef}>
                  <List style={getListStyle(snapshot.isDraggingOver)}>
                    {this.state.items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                        {(provided, snapshot) => (
                          <ListItem
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
                              primary={item.item}
                            />
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => this.props.dispatch(
                                  {
                                    type: 'DELETE_GROCERY_ITEM',
                                    payload: item
                                  })}>
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
  
  export default connect(mapReduxStateToProps)(groceryList);
  