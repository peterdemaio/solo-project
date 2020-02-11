import { combineReducers } from 'redux';

const preferencesMaster = (state = [], action) => {
    switch (action.type) {
      case 'SET_PREFERENCES_LIST':
        return action.payload;
      default:
        return state;
    }
  };

 
  const userPreferences = (state = [], action) => {
    switch (action.type) {
      case 'SET_USER_PREFERENCES':
        return action.payload;
      default:
        return state
    }
  }

  // preferences will be on the redux state at:
  // state.preferenceMasterReducer
  export default combineReducers({
    
      preferencesMaster,
      userPreferences
    })