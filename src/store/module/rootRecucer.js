import {combineReducers} from 'redux';

import weather from './weather/reducer';
import favorite from './favorite/reducer';

export default combineReducers({
  weather,
  favorite,
});
