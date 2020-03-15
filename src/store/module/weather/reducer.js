const initialState = {
  city: {},
  cities: [],
};

export default function weather(state = initialState, action) {
  switch (action.type) {
    case '@weather/LIST_CITIES_REQUEST':
      return {
        ...state,
        cities: action,
      };
    case '@weather/LIST_CITIES_SUCCESS':
      return {
        ...state,
        cities: action.citiesResult,
      };
    case '@weather/CLEAR_LIST_CITIES':
      return {
        ...state,
        cities: [],
      };
    case '@weather/CITY_DETAILS_REQUEST':
      return {
        ...state,
        woeid: action,
      };
    case '@weather/CITY_DETAILS_SUCCESS':
      return {
        ...state,
        city: action.weatherResult,
      };

    default:
      return state;
  }
}
