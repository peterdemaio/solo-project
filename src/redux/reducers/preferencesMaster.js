const preferencesMaster = (state = [], action) => {
    switch (action.type) {
      case 'SET_PREFERENCES_LIST':
          console.log('in preferencesMaster reducer', action.payload )
        return action.payload;
      default:
        return state;
    }
  };
  // preferences will be on the redux state at:
  // state.preferenceMasterReducer
  export default preferencesMaster;