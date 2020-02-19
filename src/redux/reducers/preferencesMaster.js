const preferencesMaster = (state = [], action) => {
    switch (action.type) {
      case 'SET_PREFERENCES_LIST':
        return action.payload;
      default:
        return state;
    }
  };

  // preferences will be on the redux state at:
  // state.preferenceMaster
  export default preferencesMaster