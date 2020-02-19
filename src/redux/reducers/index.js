import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import preferencesMaster from './preferencesMaster'
import searchReducer from './searchReducer'
import favorites from './favorites'
import spinner from './spinnerReducer'
import mealPlan from './mealplan'

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  preferencesMaster, // This is the list of 12 preferences from the database users can select from
  searchReducer,
  favorites,
  spinner,
  mealPlan
});

export default rootReducer;
