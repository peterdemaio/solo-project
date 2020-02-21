import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* groceryListSaga() {
yield takeEvery ('MAKE_GROCERY_LIST', makeGroceryList);
yield takeEvery ('GET_GROCERY_LIST', getGroceryList);
yield takeEvery ('DELETE_GROCERY_ITEM', deleteGroceryItem)
yield takeEvery ('EDIT_GROCERY_ITEM', editGroceryItem)
}

function* deleteGroceryItem(action) {
    try {
        let id = action.payload.id
        let user_id = action.payload.user_id
        let response = yield axios.delete(`/grocerylist/${id}`);
        yield put ({ type: 'GET_GROCERY_LIST', payload: user_id})
    } catch (err) {
        console.log('Error in grocery delete saga:', err)
    }

}

function* makeGroceryList(action){
    try {
    console.log('In make grocery list saga with:', action.payload)
    yield axios.post(`/grocerylist`, {list: action.payload.groceryList, id: action.payload.user_id}) 
    yield put({ type: 'GET_GROCERY_LIST', payload: action.payload.user_id})
} catch (error) {
        console.log('User get request failed', error);
      }
}

function* getGroceryList(action){
    try {
        console.log('getting grocery list with id of:', action.payload)
    let id = action.payload
    let response = yield axios.get(`/grocerylist/?id=${id}`)
    console.log('ready to set the grocery list with:', response.data)
    yield put ({ type: 'SET_GROCERY_LIST', payload: response.data})
    console.log('got back with this grocery list:', response.data)
} catch (err) {
        console.log('error getting grocery list', err)
    }
}

function* editGroceryItem(action) {
    try {
        console.log('trying to edit the grocery item with:', action.payload)
    let response = yield axios.put('/grocerylist', action.payload)
    yield put ({type: 'GET_GROCERY_LIST', payload: action.payload.user_id})
} catch (err) {
        console.log(err)
    }
    
}

export default groceryListSaga