import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* favoriteSaga() {
    yield takeEvery ('SAVE_RECIPE', saveRecipe);
    yield takeEvery ('GET_FAVORITES', getFavorites);
    yield takeEvery ('DELETE_FAVORITE', deleteFavorite);
    yield takeEvery ('EDIT_NOTE', editNote)
}

function* saveRecipe(action) {
    yield axios.post(`/favorites`, { recipe: action.payload.recipe, user: action.payload.user})
    
}

function* getFavorites(action) {
    console.log(action.payload)
    let id = action.payload
    let response = yield axios.get(`/favorites/?id=${id}`)
    yield put({ type: 'SET_FAVORITES', payload: response.data })
}

function* deleteFavorite(action) {
    console.log('ready to delete', action.payload)
    let id = action.payload.user
    let food_id = action.payload.recipe.id
    let response = yield axios.delete(`/favorites/${food_id}`);
    yield put({type: 'GET_FAVORITES', payload: id})
}

function* editNote(action) {
    console.log('ready to edit the note on this recipe', action.payload)
    let user_id = action.payload.user_id
    //let food_id = action.payload.food_id
    let response = yield axios.put(`/favorites/`, action.payload)
    yield put ({type: 'GET_FAVORITES', payload: user_id})
}
  export default favoriteSaga
