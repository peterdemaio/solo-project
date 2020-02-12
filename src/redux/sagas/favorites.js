import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* favoriteSaga() {
    yield takeEvery ('SAVE_RECIPE', saveRecipe);
}



export default favoriteSaga