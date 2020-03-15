const initialState = {
  favorite: undefined,
};

export default function favorite(state = initialState, action) {
  switch (action.type) {
    case '@favorite/FAVORITE_CITY_REQUEST':
      return {
        favorite: action.favorite,
      };
    case '@favorite/REMOVE_FAVORITE_CITY':
      return {
        favorite: undefined,
      };
    default:
      return state;
  }
}
