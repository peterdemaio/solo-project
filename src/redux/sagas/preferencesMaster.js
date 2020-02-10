import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* preferencesSaga() {
    yield takeEvery ('GET_PREFERENCES_MASTER', getPreferences);
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

export default preferencesSaga