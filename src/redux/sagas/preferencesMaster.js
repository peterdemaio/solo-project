import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* preferencesSaga() {
    yield takeEvery ('GET_USER_PREFERENCES', getPreferences);
    yield takeEvery ('GET_SEARCH_PREFERENCES', searchPreferences)
    yield takeEvery ('EDIT_PREFERENCE', editPreference)
}

function* getPreferences(action) {
    try {
        let id = action.payload
        let response = yield axios.get(`/preferences/${id}`)
        yield put({
            type: 'SET_PREFERENCES_LIST',
            payload: response.data
        })
    } catch (err) {
        console.log(err)
    }
}

function* searchPreferences(action) {
    console.log(action.payload)
    let id = action.payload.id
    try{
        let response = yield axios.get(`/searchPreferences/?id=${id}`)
        yield put ({
            type: 'SET_SEARCH_PREFERENCES',
            payload: response.data
        })
    } catch {
        console.log('There was a grave mistake')
    }
}

function* editPreference(action) {
    // edit the preference then go get the preference list again
    console.log('in edit saga with:', action.payload)
    try {
        let response = yield axios.put('/preferences', action.payload)
        console.log('getting back from edit route with response.data of:', response.data)
        yield put ({type: 'GET_USER_PREFERENCES', payload: response.data.user_id})
    } catch {
        console.log('there was an error, try again')
    }
}
export default preferencesSaga