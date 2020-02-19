const spinnerReducer = (state = false, action) => {
    switch (action.type) {
      case 'START_SPINNER':
        return true;
      case 'STOP_SPINNER':
        return false;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default spinnerReducer;
  