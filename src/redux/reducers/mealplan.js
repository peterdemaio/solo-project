const mealPlan = (state = [], action) => {
    switch (action.type) {
      case 'SET_MEAL_PLAN':
        return action.payload;
      default:
        return state;
    }
  };

  export default mealPlan