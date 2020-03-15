export function listCitiesRequest(city) {
  return {
    type: '@weather/LIST_CITIES_REQUEST',
    city,
  };
}

export function listCitiesSuccess(citiesResult) {
  return {
    type: '@weather/LIST_CITIES_SUCCESS',
    citiesResult,
  };
}

export function clearListCities() {
  return {
    type: '@weather/CLEAR_LIST_CITIES',
  };
}

export function cityDetailsRequest(woeid) {
  return {
    type: '@weather/CITY_DETAILS_REQUEST',
    woeid,
  };
}

export function cityDetailsSuccess(weatherResult) {
  return {
    type: '@weather/CITY_DETAILS_SUCCESS',
    weatherResult,
  };
}
