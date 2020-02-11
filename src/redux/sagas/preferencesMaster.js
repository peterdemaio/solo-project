import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* preferencesSaga() {
    yield takeEvery ('GET_PREFERENCES_MASTER', getPreferences);
    yield takeEvery ('SET_PREFERENCES', setPreferences)
    yield takeEvery ('GET_USER_PREFERENCES', userPreferences)
}

function* getPreferences() {
    try {
        let response = yield axios.get('/preferences')
        yield put({
            type: 'SET_PREFERENCES_LIST',
            payload: response.data
        })
    } catch (err) {
        console.log(err)
    }
}

function* setPreferences(action) {
    console.log('about to save your preferences')
    try {
       yield axios.post('/preferences', action.payload)
     } catch {
         console.log('there was a mistake')
     }
}

function* userPreferences(action) {
    console.log(action.payload)
    let id = action.payload.id
    try{
        let response = yield axios.get(`/userPreferences/?id=${id}`)
        yield put ({
            type: 'SET_USER_PREFERENCES',
            payload: response.data
        })
    } catch {
        console.log('There was a grave mistake')
    }
}
export default preferencesSaga