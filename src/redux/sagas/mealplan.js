import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* mealPlanSaga() {
    yield takeEvery ('ADD_TO_MEAL_PLAN', addToMealPlan);
    yield takeEvery ('FETCH_MEAL_PLAN', fetchMealPlan);
    yield takeEvery ('DELETE_MEAL_PLAN', deleteMealPlan)
   
}

function* addToMealPlan(action){
    console.log('ready to add to meal plan', action.payload)
    yield axios.post(`/mealplan`, {recipe: action.payload.recipe, user: action.payload.user})
}

function* fetchMealPlan(action){
    let id = action.payload
    console.log('ready to get the meal plan for user:', action.payload)
    let response = yield axios.get(`/mealplan?id=${id}`)
    yield put ({type: 'SET_MEAL_PLAN', payload: response.data})
}

function* deleteMealPlan(action){
    console.log('ready to remove from meal plan', action.payload)
    let id = action.payload.user;
    let food_id= action.payload.recipe.id
    let response = yield axios.delete(`/mealplan/${food_id}`);
    yield put({type: 'FETCH_MEAL_PLAN', payload: id})
}


export default mealPlanSaga