import {call, put, all, takeLatest} from 'redux-saga/effects';

import api from '../../../services/api';

import {listCitiesSuccess, cityDetailsSuccess} from './actions';

function* listCities(action) {
  const response = yield call(
    api.get,
    `/location/search/?query=${action.city}`,
  );
  yield put(listCitiesSuccess(response.data));
}

function* weatherDetails(action) {
  const response = yield call(api.get, `/api/location/${action.woeid}`);
  console.log(response);
  yield put(cityDetailsSuccess(response.data));
}

export default all([
  takeLatest('@weather/LIST_CITIES_REQUEST', listCities),
  takeLatest('@weather/CITY_DETAILS_REQUEST', weatherDetails),
]);
