import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* searchSaga() {
    yield takeEvery ('SEARCH', fireSearch);
    
}
function* fireSearch(action) {
    console.log(action.payload)
    let query = action.payload.query
    let preferences = []
    for (let preference of action.payload.preferences) {
        preferences.push(preference.name)
    }
    let text = ''
    for (let i=0; i < preferences.length; i++) {
        text += "&health="+preferences[i]
    }
    // start spinner here 
    yield put ({ 
        type: 'START_SPINNER'
    })
    let response = yield axios.get(`/search/?q=${query}&health=${text}`)
    yield console.log(response.data.hits)
    yield put ({
        type: 'SET_RECIPES',
        payload: response.data.hits
        })
    //end spinner
    yield put ({ 
        type: 'STOP_SPINNER'
    })
}

export default searchSaga