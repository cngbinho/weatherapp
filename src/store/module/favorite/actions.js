export function favoriteCityRequest(favorite) {
  return {
    type: '@favorite/FAVORITE_CITY_REQUEST',
    favorite,
  };
}

export function removeFavorite() {
  console.log('to aqui');
  return {
    type: '@favorite/REMOVE_FAVORITE_CITY',
  };
}
