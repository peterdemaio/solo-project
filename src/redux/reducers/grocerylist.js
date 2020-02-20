const groceryList = (state = [], action) => {
    switch (action.type) {
      case 'SET_GROCERY_LIST':
        return action.payload;
      default:
        return state;
    }
  };

export default groceryList