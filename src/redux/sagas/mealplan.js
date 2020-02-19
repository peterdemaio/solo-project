import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* mealPlanSaga() {
    yield takeEvery ('ADD_TO_MEAL_PLAN', addToMealPlan);
   
}

function* addToMealPlan(action){
    console.log('ready to add to meal plan', action.payload)
    yield axios.post(`/mealplan`, {recipe: action.payload.recipe, user: action.payload.user})
}


export default mealPlanSaga