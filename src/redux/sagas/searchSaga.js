import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { connect } from 'react-redux'

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
        text+= "&health="+preferences[i]
    }
    console.log(`/search/?query=${query}${text}`)
    // yield console.log(`READY TO SEARCH FOR ${query} and ${prefString}`  )
    // let response = yield axios.get(`/search/?query=${query}&preferences=${prefString}`)
    // yield console.log(response.data)
}

export default searchSaga